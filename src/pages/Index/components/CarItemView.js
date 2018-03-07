/**
 * 此处定义子组件，详细文档：http://fedoc.sqaproxy.souche.com/rn/develop/dev_1.html
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    NativeModules
} from 'react-native';
import { List } from '@souche-ui/srn-ui';
import { observer } from '@souche-f2e/srn-framework';

@observer
class CarItemView extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <List title="车辆信息">

                <List.Item title="标题" extra={this.props.recommendCar.title}></List.Item>
                <List.Item title="卖家" extra={this.props.recommendCar.sellerName}></List.Item>
                <List.Item title="卖家" extra={this.props.recommendCar.seller_name}></List.Item>
                <List.Item title="价格" extra={this.props.recommendCar.price+'元'}></List.Item>
                <List.Item title="里程" extra={this.props.recommendCar.mileage+'元'}></List.Item>
            </List>
        );
    }
}
const styles = StyleSheet.create({

});


export default CarItemView
