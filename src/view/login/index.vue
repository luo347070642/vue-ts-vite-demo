<template>
  <a-form layout="inline"
          :model="formState"
          @finish="handleFinish"
          @finishFailed="handleFinishFailed">
    <a-form-item>
      <a-input v-model:value="formState.username"
               placeholder="Username">
        <template #prefix>
          <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-model:value="formState.password"
               type="password"
               placeholder="Password">
        <template #prefix>
          <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary"
                html-type="submit"
                @click="login"
                :disabled="formState.username === '' || formState.password === ''">
        登录
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface'
import { defineComponent, reactive, UnwrapRef } from 'vue'
import { useRouter } from 'vue-router'
import { loginReq } from '@/api/user'
interface FormState {
  username: string
  password: string
}
export default defineComponent({
  setup() {
    const router = useRouter()
    const formState: UnwrapRef<FormState> = reactive({
      username: '',
      password: ''
    })
    const handleFinish = (values: FormState) => {
      console.log(values, formState)
    }
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors)
    }
    const login = () => {
      loginReq(formState).then((res) => {
        console.log(res)
        const {
          data: { code, msg }
        } = res
        if (code === 0) {
          localStorage.setItem('token', 'value')
          router.push({ name: 'home' })
        } else {
          console.error(msg)
        }
      })
    }
    return {
      login,
      formState,
      handleFinish,
      handleFinishFailed
    }
  },
  components: {
    UserOutlined,
    LockOutlined
  }
})
</script>

<style>
</style>