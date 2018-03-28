package com.css.nsfw.dp.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by autod on 2017/5/17.
 */

@Controller
@RequestMapping(value = "/view")
public class DpIndexViewController {
	@GetMapping(value = "/one")
	public String view1() {
		return "index1";
	}

	@GetMapping(value = "/two")
	public String view2() {
		return "index2";
	}

	@GetMapping(value = "/three")
	public String view3() {
		return "index3";
	}

	@GetMapping(value = "/four")
	public String view4() {
		return "index4";
	}

	@GetMapping(value = "/five")
	public String view5() {
		return "index5";
	}

	@GetMapping(value = "/six")
	public String view6() {
		return "index6";
	}

	@GetMapping(value = "/all")
	public String viewall() {
		return "index_all_v2";
	}

	@GetMapping(value = "/all_v2")
	public String viewall_v2() {
		return "index_all_v3";
	}

	@GetMapping(value = "/console")
	public String console() {
		return "console";
	}
	
	@GetMapping(value = "/all_v4")
	public String viewall_v4() {
		return "index_all_v4";
	}

}
