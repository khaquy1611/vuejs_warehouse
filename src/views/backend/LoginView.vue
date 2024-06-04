<script setup></script>

<template>
  <div class="login-container uk-width-1-1">
    <div class="login-wrapper uk-width-1-1">
      <div class="panel-head">
        <h2 class="heading-title">Đăng nhập</h2>
        <div class="description">
          Chào mừng bạn đến với hệ thống <br />
          <span> VUE SYSTEM </span>
        </div>
      </div>
      <div class="panel-body">
        <div class="form-row mb-20">
          <div class="label">Tên đăng nhập</div>
          <input type="text" name="email" value="" class="input-text" autocomplete="off" />
        </div>
        <div class="form-row mb-5">
          <div class="label">
            <div class="uk-flex uk-flex-between">
              <span>Mật khẩu</span>
              <a href="" title="" class="forgot">Quên mật khẩu?</a>
            </div>
          </div>
          <input type="password" name="email" value="" class="input-text" autocomplete="off" />
        </div>
        <div class="form-row mb-20">
          <div class="uk-flex uk-flex-middle">
            <input
              type="checkbox"
              name="remember"
              id="forgot-password"
              value=""
              class="input-checkbox"
              autocomplete="off"
            />
            <label for="forgot-password">Ghi nhớ mật khẩu?</label>
          </div>
        </div>
        <div class="form-row mb-5">
          <div class="uk-button btn-login">Đăng nhập</div>
        </div>
        <div class="panel-foot">copyright khaquy1611@gmail.com</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  padding-top: 100px;
}
.login-wrapper {
  width: 410px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0.125rem 0 rgba(10, 10, 10, 0.4);
  padding: 48px;
}
.login-wrapper .panel-head {
  text-align: center;
  margin-bottom: 30px;
}
.login-wrapper .panel-head .heading-title {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 24px;
}
.login-wrapper .panel-head .description {
  font-size: 15px;
  color: #000;
}
.login-wrapper .panel-head .description span {
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  color: rgb(132, 90, 223);
}
.uk-button {
  background: rgb(132, 90, 223);
  width: 100%;
  border-radius: 5px;
  height: 40px;
  color: #fff;
}
.login-wrapper .panel-foot {
  text-align: center;
}
.login-wrapper .label {
  font-weight: 600;
  margin-bottom: 5px;
  color: #000;
}
.form-row .forgot {
  color: rgb(230, 80, 60);
  font-size: 13px;
}
</style>
