package com.css.nsfw.dp.config.ds;

import com.alibaba.druid.pool.DruidDataSource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import javax.sql.DataSource;

/**
 * Created by autod on 2017/5/10.
 */

@Configuration
// 扫描 Mapper 接口并容器管理
@MapperScan(basePackages = WtDataSourceConfig.PACKAGE, sqlSessionFactoryRef = "wtSqlSessionFactory")
public class WtDataSourceConfig {

    // 精确到 wt 目录，以便跟其他数据源隔离
    static final String PACKAGE = "com.css.nsfw.dp.dao.wt";
    static final String MAPPER_LOCATION = "classpath:mapper/wt/*.xml";

    @Value("${wt.datasource.url}")
    private String url;

    @Value("${wt.datasource.username}")
    private String user;

    @Value("${wt.datasource.password}")
    private String password;

    @Value("${wt.datasource.driverClassName}")
    private String driverClass;

    @Bean(name = "wtDataSource")
    @Primary
    public DataSource wtDataSource() {
        DruidDataSource dataSource = new DruidDataSource();
        dataSource.setDriverClassName(driverClass);
        dataSource.setUrl(url);
        dataSource.setUsername(user);
        dataSource.setPassword(password);
        dataSource.setTestWhileIdle(false);
        return dataSource;
    }

    @Bean(name = "wtTransactionManager")
    @Primary
    public DataSourceTransactionManager wtTransactionManager() {
        return new DataSourceTransactionManager(wtDataSource());
    }

    @Bean(name = "wtSqlSessionFactory")
    @Primary
    public SqlSessionFactory wtSqlSessionFactory(@Qualifier("wtDataSource") DataSource wtDataSource)
            throws Exception {
        final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(wtDataSource);
        sessionFactory.setMapperLocations(new PathMatchingResourcePatternResolver()
                .getResources(WtDataSourceConfig.MAPPER_LOCATION));
        return sessionFactory.getObject();
    }
}
