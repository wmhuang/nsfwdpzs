package com.css.nsfw.dp.dao.nfpt;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

/**
 * Created by autod on 2017/5/10.
 */
@Component
@Mapper
public interface NfxxConsoleDao {
	String getConsoleValue(String typer);

	List getAllConsoleValue();

	int updateValue(Map<String, String> params);
}
