package com.css.nsfw.dp.web.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.css.nsfw.dp.service.INfxxService;

/**
 * Created by autod on 2017/5/24.
 */
@RestController
@RequestMapping(value="/five")
public class DpIndexFiveController {
    @Autowired
    private INfxxService dpxxService;

    @GetMapping(value = "/getZxXx")
    public List getZxXx(){
        return dpxxService.getZxXx();
    }
    
    @GetMapping(value = "/getZxXxAll")
    public List getZxXxAll(){
        return dpxxService.getZxXxAll();
    }

    @GetMapping(value = "/getZxFwxx/{zxdm}")
    public Map getZxFwxx(@PathVariable("zxdm")  String zxdm){
        return dpxxService.getZxFwxx(zxdm);
    }

    //上海月来电总量接口
    @GetMapping(value = "/getYldzl")
    public Map getYldzl(){
        return dpxxService.getYldzl();
    }
}
