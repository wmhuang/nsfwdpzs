package com.css.nsfw.dp.web.controller;

import com.css.nsfw.dp.service.INfxxService;
import com.css.nsfw.dp.service.IWtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * Created by autod on 2017/5/19.
 */
@RestController
@RequestMapping(value="/two")
public class DpIndexTwoController {

    @Autowired
    private INfxxService dpxxService;
    @Autowired
    private IWtService wtService;

    //满意率按月合计
    @GetMapping(value = "/getMylYd")
    public List getMylYd(){
        return dpxxService.getMylYd();
    }

    //接通率按月合计
    @GetMapping(value = "/getJtlYd")
    public List getJtlYd(){
        return dpxxService.getJtlYd();
    }

    //语音和人工服务量 按月合计
    @GetMapping(value = "/getYyRgFwl")
    public List getYyRgFwl(){
        return dpxxService.getYyRgFwl();
    }

    // 上海月来电总量接口
    @GetMapping(value = "/getYldzl")
    public Map getYldzl(){
        return dpxxService.getYldzl();
    }
    //语音和人工服务量 按月合计
    @GetMapping(value = "/getYyRgFwlNew")
    public List getYyRgFwlNew(){
        return dpxxService.getYyRgFwlNew();
    }
    
    @GetMapping(value="/getShNldzl")
    public Map  getShNldzl(){
    	return dpxxService.getShNldzl();
    }
}
