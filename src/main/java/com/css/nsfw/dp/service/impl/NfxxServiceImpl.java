package com.css.nsfw.dp.service.impl;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.css.nsfw.dp.dao.nfpt.NfxxDao;
import com.css.nsfw.dp.service.INfxxService;

/**
 * Created by autod on 2017/5/10.
 */
@Service
public class NfxxServiceImpl implements INfxxService {

	@Autowired
	private NfxxDao nfxxDao;

	@Override
	public List getYxqk() {
		return nfxxDao.getYxqk();
	}

	@Override
	public Map getRldzl() {
		return nfxxDao.getRldzl();
	}

	@Override
	public Map getHwzl() {
		return nfxxDao.getHwzl();
	}

	@Override
	public Map getJtl() {
		return nfxxDao.getJtl();
	}

	@Override
	public Map getMyl() {
		return nfxxDao.getMyl();
	}

	@Override
	public Map getLyqd() {
		return nfxxDao.getLyqd();
	}

	@Override
	public Map getYwlb() {
		return nfxxDao.getYwlb();
	}

	@Override
	public List getMylYd() {
		return nfxxDao.getMylYd();
	}

	@Override
	public List getJtlYd() {
		return nfxxDao.getJtlYd();
	}

	@Override
	public List getYyRgFwl() {
		return nfxxDao.getYyRgFwl();
	}

	@Override
	public Map getRgfwl() {
		return nfxxDao.getRgfwl();
	}

	@Override
	public List getWtlx() {
		return nfxxDao.getWtlx();
	}

	@Override
	public List getWtlxMx(String lxdm) {
		return nfxxDao.getWtlxMx(lxdm);
	}

	@Override
	public List getZxXx() {
		return nfxxDao.getZxXx();
	}

	@Override
	public Map getZxFwxx(String zxdm) {
		return nfxxDao.getZxFwxx(zxdm);
	}

	@Override
	public Map getYldzl() {
		return nfxxDao.getYldzl();
	}

	@Override
	public List getYyRgFwlNew() {
		return nfxxDao.getYyRgFwlNew();
	}

	@Override
	public Map getChina() {
		return nfxxDao.getChina();
	}

	@Override
	public List getLdzlBYUnitThisMonth() {
		return nfxxDao.getLdzlBYUnitThisMonth();
	}

	@Override
	public List getLdzlBYUnitToday() {
		return nfxxDao.getLdzlBYUnitToday();
	}

	@Override
	public Map getShNldzl() {
		return nfxxDao.getShNldzl();
	}

	@Override
	public Map getShNHwzl() {
		return nfxxDao.getShNHwzl();
	}

	@Override
	public Map getShYHwzl() {
		return nfxxDao.getShYHwzl();
	}

	@Override
	public Map getShHwzlRgfwlJtl() {
		Date now = new Date();
		int month = now.getMonth()+1;
		if (month == 1) {
			// 1月份取去年全年数据
			return nfxxDao.getShHwzlRgfwlJtlJanuary();

		} else {
			// 其他月份取当年至上月底数据
			return nfxxDao.getShHwzlRgfwlJtlOtherMonth();
		}
	}

	@Override
	public Map getQgHwzlRgfwlJtl() {
		return nfxxDao.getQgHwzlRgfwlJtl();
	}

}
