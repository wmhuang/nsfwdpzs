package com.css.nsfw.dp.web.controller;

import com.css.nsfw.dp.service.INfxxService;
import com.css.nsfw.dp.service.IWtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Created by autod on 2017/5/19.
 */
@RestController
@RequestMapping(value = "/three")
public class DpIndexThreeController {

	@Autowired
	private INfxxService dpxxService;
	@Autowired
	private IWtService wtService;

	@GetMapping(value = "/getHwzl")
	public Map getHwzl() {
		return dpxxService.getHwzl();
	}

	@GetMapping(value = "/getRgfwl")
	public Map getRgfwl() {
		return dpxxService.getRgfwl();
	}

	@GetMapping(value = "/getJtl")
	public Map getJtl() {
		return dpxxService.getJtl();
	}

	@GetMapping(value = "/getShNHwzl")
	public Map getShNHwzl() {
		return dpxxService.getShNHwzl();
	}

	@GetMapping(value = "/getShHwzlRgfwlJtl")
	public Map getShJtl() {
		return dpxxService.getShHwzlRgfwlJtl();
	}

	@GetMapping(value = "/getQgHwzlRgfwlJtl")
	public Map getShRgfwl() {
		return dpxxService.getQgHwzlRgfwlJtl();
	}

}
