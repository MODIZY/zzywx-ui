# zzywx-ui 组件库

## 快速开始
### 1.安装组件库
```bash
    npm i zzywx-ui
```
### 2.应用组件库
```javascript
    // 全部引用
    import 'zzywx-ui/dist/css/index.css'
    import MUI from 'zzywx-ui'
    Vue.use(MUI)

    // 按需引用
    import 'zzywx-ui/dist/demo.css';
    import {Demo} from 'zzywx-ui';
    Vue.use(Demo)
```
## 组件的使用
### button组件的使用

![Image text](https://img-blog.csdnimg.cn/373e6d3492614844b7d1d54dd4328ab6.png)

```javascript
     <z-btn>默认按钮</z-btn>
    <z-btn type="primary">主要按钮</z-btn>
    <z-btn type="success">成功按钮</z-btn>
    <z-btn type="info">信息按钮</z-btn>
    <z-btn type="warning">警告按钮</z-btn>
    <z-btn type="danger">危险按钮</z-btn>
    <br />
    <z-btn plain>朴素按钮</z-btn>
    <z-btn type="primary" plain>主要按钮</z-btn>
    <z-btn type="success" plain>成功按钮</z-btn>
    <z-btn type="info" plain>信息按钮</z-btn>
    <z-btn type="warning" plain>警告按钮</z-btn>
    <z-btn type="danger" plain>危险按钮</z-btn>
    <br />
    <z-btn round>圆角按钮</z-btn>
    <z-btn type="primary" round>主要按钮</z-btn>
    <z-btn type="success" round>成功按钮</z-btn>
    <z-btn type="info" round>信息按钮</z-btn>
    <z-btn type="warning" round>警告按钮</z-btn>
    <z-btn type="danger" round>危险按钮</z-btn>
```
| 参数 | 说明 | 类型 | 可选值 | 默认值
| :-----| :----- | :----- |:-----|:----- |
| size | 尺寸| string | medium / small / mini |	— |
| type | 类型| string | primary / success / warning / danger / info  | — |
| plain | 是否朴素按钮 | boolean | — | false |
| round | 是否圆角按钮 | boolean | — | false |

### switch 开关

| 参数          | **描述**                         | 类型                      | **默认值** | **必传** |
| :------------ | :------------------------------- | :------------------------ | :--------- | :------- |
| value         | 是否激活 使用v-model进行双向绑定 | [Boolean, String, Number] | false      | 是       |
| width         | 宽度                             | Number                    | 40         | 否       |
| activeColor   | 激活颜色                         | String                    | #409EFF    | 否       |
| inactiveColor | 未激活颜色                       | String                    | #C0CCDA    | 否       |

```html
      <z-switch
        v-model="show"
        :width="80"
        activeColor="#f00"
        inactiveColor="#00f"
      ></z-switch>
```

![image-20220506205820771](https://img-blog.csdnimg.cn/b5c09d6bac9a46df89f1dca21a3f3a67.png)

```js
export default {
  name: "App",
  components: {},
  data() {
    return {
      show:false
    };
  },
};
```

### slider 滑块

```html
 <z-slider v-model="num" :min="10" :max="200"></z-slider>
```

![image-20220506205946004](https://img-blog.csdnimg.cn/4b883b646d1b47d4a0d8873aa954f06d.png)

| 参数  | **描述**                | 类型   | **默认值** | **必传** |
| :---- | :---------------------- | :----- | :--------- | :------- |
| value | 使用v-model进行双向绑定 | Number | -          | 是       |
| min   | 最小值                  | Number | 0          | 否       |
| max   | 最大值                  | Number | 100        | 否       |

```js

export default {
  name: 'App',
  data() {
    return {
      num: 0,
    };
  }
};

```

