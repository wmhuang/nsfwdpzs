package com.css.nsfw.dp.web.controller;

import com.css.nsfw.dp.service.INfxxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


/**
 * Created by autod on 2017/5/10.
 */
@RestController
@RequestMapping(value="/six")
public class DpIndexSixController {

    @Autowired
    private INfxxService dpxxService;

    //查询上个自然月 每个分局的来电总量(闸北分局并到静安分局)
    @GetMapping(value = "/getLdzlBYUnitThisMonth")
    public List getLdzlBYUnitLastMonth() {
        return dpxxService.getLdzlBYUnitThisMonth();
    }

    @GetMapping(value = "/getLdzlBYUnitToday")
    public List getLdzlBYUnitToday(){
        return dpxxService.getLdzlBYUnitToday();
    }
    }
