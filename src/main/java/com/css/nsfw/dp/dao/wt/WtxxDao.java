package com.css.nsfw.dp.dao.wt;

import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

/**
 * Created by autod on 2017/5/10.
 */
@Mapper
public interface WtxxDao {
    Map getDtll(String fjdm);
}
