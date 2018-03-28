package com.css.nsfw.dp.web.controller;

import com.css.nsfw.dp.service.INfxxService;
import com.css.nsfw.dp.service.IWtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * Created by autod on 2017/5/23.
 */
@RestController
@RequestMapping(value="/four")
public class DpIndexFourController {

    @Autowired
    private INfxxService dpxxService;
    @Autowired
    private IWtService wtService;

    //来源渠道
    @GetMapping(value = "/getLyqd")
    public Map getLyqd(){
        return dpxxService.getLyqd();
    }

    //业务类别
    @GetMapping(value = "/getYwlb")
    public Map getYwlb(){
        return dpxxService.getYwlb();
    }

    //问题类型
    @GetMapping(value = "/getWtlx")
    public List getWtlx(){
        return dpxxService.getWtlx();
    }

    //问题类型明细
    @GetMapping(value = "/getWtlxMx/{lxdm}")
    public List getWtlxMx(@PathVariable("lxdm")  String lxdm){
        return dpxxService.getWtlxMx(lxdm);
    }

    //上海月来电总量接口
    @GetMapping(value = "/getYldzl")
    public Map getYldzl(){
        return dpxxService.getYldzl();
    }
}
