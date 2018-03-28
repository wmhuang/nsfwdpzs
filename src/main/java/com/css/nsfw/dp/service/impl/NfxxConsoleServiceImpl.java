package com.css.nsfw.dp.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.css.nsfw.dp.dao.nfpt.NfxxConsoleDao;
import com.css.nsfw.dp.service.NfxxConsoleService;

/**
 * Created by autod on 2017/11/21.
 */
@Service
public class NfxxConsoleServiceImpl implements NfxxConsoleService {

	@Autowired
	private NfxxConsoleDao nfxxConsoleDao;

	@Override
	public String getConsoleValue(String type) {
		return nfxxConsoleDao.getConsoleValue(type);
	}

	@Override
	public List getAllConsoleValue() {
		return nfxxConsoleDao.getAllConsoleValue();
	}

	@Override
	public void updateValue(Map<String,String> pamars) {
		nfxxConsoleDao.updateValue(pamars);
	}
}
