package com.css.nsfw.dp.dao.nfpt;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

/**
 * Created by autod on 2017/5/10.
 */
@Component
@Mapper
public interface NfxxDao {
	List getYxqk();

	Map getRldzl();

	Map getHwzl();

	Map getJtl();

	Map getMyl();

	Map getLyqd();

	Map getYwlb();

	List getMylYd();

	List getJtlYd();

	List getYyRgFwl();

	Map getRgfwl();

	Map getShHwzlRgfwlJtlJanuary();
	
	Map getShHwzlRgfwlJtlOtherMonth();
	
	List getWtlx();

	List getWtlxMx(String lxdm);

	List getZxXx();

	Map getZxFwxx(String zxdm);

	Map getYldzl();

	List getYyRgFwlNew();

	Map getChina();

	List getLdzlBYUnitThisMonth();

	List getLdzlBYUnitToday();

	Map getShNldzl();

	Map getShNHwzl();

	Map getShYHwzl();

	Map getQgHwzlRgfwlJtl();

	/**
	 * @return
	 * @createDate 2018年5月29日
	 * @author wmhuang
	*/
	List getZxXxAll();
}
