'use strict';
import React from 'react';

/**
 * 所有 component 整个框架内只有此处引入
 * navigator 统一进行路由显示
 * 将全部 component 的引用从老式的层级式改为统一入口的扁平式
 */ 
import Homepage from '../components/homepage';
import List from '../components/list';
import Detail from '../components/detail';
import Error from '../components/error';

/*
 * 路由配置项
 * 可配置默认参数 props: params ，配合 this.props 的限制可使代码更严谨
 * component 默认和 key 、component 文件夹名称一致，首字母大写，component 文件夹内强制 index.js 为入口文件
 */
const RouteMap = {
    'homepage': {index: 0, component: Homepage, params: {}},
    'list': {index: 1, component: List, params: {}},
    'detail': {index: 2, component: Detail, params: {}}
};

class Route {

    /**
     * 获取路由堆栈
     * 可供 navigator initialRouteStack 用
     * @static
     * @returns {array}
     */
    static getRouteStack () {
        let routeStack = [];
        for (let key in RouteMap) {
            if (RouteMap.hasOwnProperty(key)) {
                routeStack.push(RouteMap[key]);
            }
        }
        return routeStack;
    }

    /**
     * 获取 ID 对应的 Component
     * 
     * @param {any} id 页面的 ID 
     *              有严格的映射关系，会根据传入 ID 同名的文件夹去取路由对应的页面
     * @param {any} params Component 用到的参数
     */
    static getRoutePage (route, navigator) {
        /*
        let Component = id.replace(/\b\w+\b/g, function(word) {   
            return word.substring(0,1).toUpperCase( ) + word.substring(1);   
        });
        */
        let id = route.id,
            params = route.params,
            routeObj = RouteMap[id],
            Component;
        if (routeObj) {
            Component = routeObj.component;
            //合并默认参数
            Object.assign(params, routeObj.params);
        } else {
            Component = Error;
            params = {message: '当前页面没有找到：' + id};
        }
        return <Component navigator={navigator} {...params} />;
    }     
    
}

export default Route;
