package com.css.nsfw.dp.service;

import java.util.List;
import java.util.Map;


public interface NfxxConsoleService {
    String getConsoleValue(String type);

	List getAllConsoleValue();
	
	void updateValue(Map<String,String> params);
}