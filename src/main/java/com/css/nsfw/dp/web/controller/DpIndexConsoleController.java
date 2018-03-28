package com.css.nsfw.dp.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.css.nsfw.dp.service.NfxxConsoleService;

/**
 * Created by autod on 2017/5/10.
 */
@RestController
@RequestMapping(value = "/console")
public class DpIndexConsoleController {

	@Autowired
	private NfxxConsoleService nfxxConsoleService;

	// 获取指定的控制信息
	@GetMapping(value = "/getConsoleValue")
	public String getConsoleValue(String type) {
		return nfxxConsoleService.getConsoleValue(type);
	}

	// 获取指定的控制信息
	@GetMapping(value = "/getAllConsoleValue")
	public List getAllConsoleValue() {
		return nfxxConsoleService.getAllConsoleValue();
	}

	// 更新属性
	@GetMapping(value = "/updateValue")
	public void updateValue(String type, String value) {
		Map<String, String> params = new HashMap<String, String>();
		params.put("type", type);
		params.put("value", value);
		nfxxConsoleService.updateValue(params);
	}
}
