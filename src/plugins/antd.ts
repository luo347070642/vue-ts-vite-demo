import type { App } from 'vue'
import { Modal, Table, Menu, Input, Form, FormItem, Card, Checkbox, Radio, Col, Row, Select, DatePicker, Button, Layout } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export function setupAntd(app: App<Element>) {
  app.use(Form).use(Button).use(Input).use(Modal).use(Layout).use(Table).use(Menu).use(Card).use(Checkbox).use(Radio).use(Col).use(Row).use(Select).use(DatePicker)
}
