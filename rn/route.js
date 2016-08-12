'use strict';
import React from 'react';

// 引入用到的所有模板
import Homepage from './components/homepage';
import Index from './components/index';
import Detail from './components/detail';
import Error from './components/error';

/*
 * 路由配置项
 * 可配置默认参数 params ，配合 this.props 的限制可使代码更严谨
 */
const RouteMap = {
    'homepage': {index: 0, component: Homepage, params: {}},
    'index': {index: 1, component: Index, params: {}},
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
            params = {};
        }
        return <Component navigator={navigator} {...params} />;
    }     
    
}

export default Route;
