package com.css.nsfw.dp.config.ds;

import com.alibaba.druid.pool.DruidDataSource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import javax.sql.DataSource;

/**
 * Created by autod on 2017/5/10.
 */

@Configuration
// 扫描 Mapper 接口并容器管理
@MapperScan(basePackages = NfptDataSourceConfig.PACKAGE, sqlSessionFactoryRef = "nfptSqlSessionFactory")
public class NfptDataSourceConfig {

    // 精确到 nfpt 目录，以便跟其他数据源隔离
    static final String PACKAGE = "com.css.nsfw.dp.dao.nfpt";
    static final String MAPPER_LOCATION = "classpath:mapper/nfpt/*.xml";

    @Value("${nfpt.datasource.url}")
    private String url;

    @Value("${nfpt.datasource.username}")
    private String user;

    @Value("${nfpt.datasource.password}")
    private String password;

    @Value("${nfpt.datasource.driverClassName}")
    private String driverClass;

    @Bean(name = "nfptDataSource")
    public DataSource nfptDataSource() {
        DruidDataSource dataSource = new DruidDataSource();
        dataSource.setDriverClassName(driverClass);
        dataSource.setUrl(url);
        dataSource.setUsername(user);
        dataSource.setPassword(password);
        dataSource.setTestWhileIdle(false);
        return dataSource;
    }

    @Bean(name = "nfptTransactionManager")
    public DataSourceTransactionManager nfptTransactionManager() {
        return new DataSourceTransactionManager(nfptDataSource());
    }

    @Bean(name = "nfptSqlSessionFactory")
    public SqlSessionFactory nfptSqlSessionFactory(@Qualifier("nfptDataSource") DataSource nfptDataSource)
            throws Exception {
        final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(nfptDataSource);
        sessionFactory.setMapperLocations(new PathMatchingResourcePatternResolver()
                .getResources(NfptDataSourceConfig.MAPPER_LOCATION));
        return sessionFactory.getObject();
    }
}
