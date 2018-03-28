package com.css.nsfw.dp.service.impl;

import com.css.nsfw.dp.dao.wt.WtxxDao;
import com.css.nsfw.dp.service.IWtService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Map;

/**
 * Created by autod on 2017/5/10.
 */
@Service
public class WtServiceImpl implements IWtService {

    @Resource
    private WtxxDao wtxxDao;

    @Override
    public Map getDtll(String fjdm) {
        System.out.println("1111="+wtxxDao);
        Map m = wtxxDao.getDtll(fjdm);
        System.out.println("2222="+m);
        return m;
    }
}
