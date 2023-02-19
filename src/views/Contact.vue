<template>
    <div class="Contact">
      <h1>Contact Us</h1>
      <h2>Get an estimate or information</h2>
      <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 10 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
      >
          <a-form-item label="Full Name" name="Name" :rules="[{ required: true, message: 'Please input your Full Name!' }]">
            <a-input/>
          </a-form-item>
          <a-form-item label="Email Address" name="email" :rules="[{ required: true, message: 'Please input your Email Address!' }]">
            <a-input/>
          </a-form-item>
          <a-form-item label="Phone Number" name="phone" :rules="[{ required: true, message: 'Please input your Phone Number!' }]">
            <a-input/>
          </a-form-item>
          <a-form-item label="Message" name="message" :rules="[{ required: true, message: 'Please input your Message!' }]">
            <a-textarea/>
          </a-form-item>
          <a-form-item :wrapper-col="{offset: 10,}">
            <a-button type="primary" html-type="submit">Submit</a-button>
          </a-form-item>
      </a-form>
    </div>
</template>

<script>

</script>
