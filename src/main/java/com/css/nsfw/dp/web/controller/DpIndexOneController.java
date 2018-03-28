package com.css.nsfw.dp.web.controller;

import com.css.nsfw.dp.service.INfxxService;
import com.css.nsfw.dp.service.IWtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by autod on 2017/5/10.
 */
@RestController
@RequestMapping(value = "/one")
public class DpIndexOneController {

	@Autowired
	private INfxxService dpxxService;
	@Autowired
	private IWtService wtService;

	// 获取运行情况 来电总量、接通率、满意率
	@GetMapping(value = "/getYxqk")
	public List getYxqk() {
		return dpxxService.getYxqk();
	}

	@GetMapping(value = "/getDtll/{fjdm}")
	public Map getDtll(@PathVariable("fjdm") String fjdm) {
		return wtService.getDtll(fjdm);
	}

	@GetMapping(value = "/test")
	public List test() {
		List l = new ArrayList();
		Map m1 = new HashMap();
		Map m2 = new HashMap();
		m1.put("value", "250");
		m1.put("value", "310");
		m2.put("name", "直接访问");
		m2.put("name", "邮件营销");

		l.add(m1);
		l.add(m2);
		return l;
	}

	// 第一屏 日来电总量接口
	@GetMapping(value = "/getRldzl")
	public Map getRldzl() {
		return dpxxService.getRldzl();
	}

	// 第一屏 话务总量
	@GetMapping(value = "/getHwzl")
	public Map getHwzl() {
		return dpxxService.getHwzl();
	}

	// 接通率
	@GetMapping(value = "/getJtl")
	public Map getJtl() {

		return dpxxService.getJtl();
	}

	// 满意率
	@GetMapping(value = "/getMyl")
	public Map getMyl() {
		return dpxxService.getMyl();
	}

	// 来源渠道
	@GetMapping(value = "/getLyqd")
	public Map getLyqd() {
		return dpxxService.getLyqd();
	}

	// 业务类别
	@GetMapping(value = "/getYwlb")
	public Map getYwlb() {
		return dpxxService.getYwlb();
	}

	// 第一屏 上海月来电总量接口
	@GetMapping(value = "/getYldzl")
	public Map getYldzl() {
		return dpxxService.getYldzl();
	}

	@GetMapping(value = "/getChina")
	public Map getChina() {
		return dpxxService.getChina();
	}

	@GetMapping(value = "/getShYHwzl")
	public Map getShYHwzl() {
		return dpxxService.getShYHwzl();
	}
}
