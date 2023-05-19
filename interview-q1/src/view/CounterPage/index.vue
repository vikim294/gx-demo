<template>
  <div id="root_counter-page">
    <el-row>
      <el-col :span="10">
        <!-- 左侧表单 -->
        <el-form ref="form" :model="form">
          <!-- 第一个数字 -->
          <el-form-item>
            <el-select v-model="form.firstNum" placeholder="请选择数字">
              <el-option
                v-for="item in 1024 / 2"
                :key="item"
                :label="item * 2"
                :value="item * 2"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- 运算符号 -->
          <el-form-item>
            <el-select v-model="form.sign" placeholder="请选择符号">
              <el-option
                v-for="item in signsList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- 第二个数字 -->
          <el-form-item>
            <el-select v-model="form.secondNum" placeholder="请选择数字">
              <el-option
                v-for="item in 100"
                :key="item"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- 计算按钮 -->
          <el-form-item>
            <el-button type="primary" @click="calculate">计算</el-button>
          </el-form-item>
        </el-form>
        <!--  -->
      </el-col>
      <el-col :span="14">
        <el-card class="box-card"> {{ res }} </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "counter-page",

  data() {
    return {
      form: {},

      signsList: [
        { label: "+", value: 1 },
        { label: "-", value: 2 },
        { label: "*", value: 3 },
        { label: "/", value: 4 },
      ],

      res: "",
    };
  },

  methods: {
    // 提示信息
    showToast(msg) {
      this.$message({
        message: msg,
        type: "warning",
      });
    },

    // 计算
    calculate() {
      // 解构
      const { firstNum, sign, secondNum } = this.form;

      // 校验
      if (!firstNum) return this.showToast("请选择第一个数字！");
      if (!sign) return this.showToast("请选择一个符号！");
      if (!secondNum) return this.showToast("请选择第二个数字！");

      // 计算 并 显示
      // +
      if (sign === 1) {
        this.res = +firstNum + +secondNum;
      }
      // -
      else if (sign === 2) {
        this.res = +firstNum - +secondNum;
      }
      // *
      else if (sign === 3) {
        this.res = +firstNum * +secondNum;
      }
      // /
      else {
        const tempRes = +firstNum / +secondNum;
        const remainder = +firstNum % +secondNum;
        // 除不尽的话，保留2位小数
        this.res = remainder ? tempRes.toFixed(2) : tempRes;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.el-row {
  width: 910px;
  margin: 174px auto;
  padding: 40px 24px 30px 43px;
  background: #f2f2f2;
}

.el-form {
  .el-form-item {
    margin-bottom: 12px;

    &:last-child {
      margin-top: 14px;
    }

    .el-select {
      width: 224px;

      ::v-deep .el-input__inner {
        padding: 0 11px;
        color: #909399;
      }
    }

    .el-button {
      width: 121px;
    }
  }
}

.el-card {
  width: 457px;
  height: 260px;
  margin-left: auto;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  line-height: 260px;
  text-align: center;

  ::v-deep .el-card__body {
    position: relative;
    padding: 0px;

    font-size: 128px;
    color: #000;

    &::after {
      content: "计算结果为 :";
      position: absolute;
      top: 15px;
      left: 20px;

      line-height: 1;
      font-size: 25px;
      color: #909399;
    }
  }
}
</style>
