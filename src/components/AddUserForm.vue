<!-- AddUserForm.vue -->
<template>
  <el-form :model="form" :rules="rules" ref="formRef" label-width="80px">
    <el-form-item label="用户名" prop="userName">
      <el-input v-model="form.userName" placeholder="请输入用户名" :disabled="props.action === 'edit'"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="form.email" placeholder="请输入用户邮箱">
        <template #append>@imooc.com</template>
      </el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="form.phone" placeholder="请输入用户手机号"></el-input>
    </el-form-item>
    <el-form-item label="岗位" prop="position">
      <el-input v-model="form.position" placeholder="请输入用户岗位"></el-input>
    </el-form-item>
    <el-form-item label="状态" prop="status">
      <el-select v-model="form.status" placeholder="请选择状态">
        <el-option label="试用期" value="trial"></el-option>
        <el-option label="正式员工" value="official"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="系统角色" prop="roles">
      <el-select v-model="form.roles" multiple placeholder="请选择系统角色" style="width: 100%">
        <el-option v-for="item in roleList" :key="item._id" :label="item.roleName" :value="item._id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所属部门" prop="department">
      <el-cascader v-model="form.department" :options="deptList" :props="deptProps" placeholder="请选择所属部门"
                   clearable
                   show-all-levels style="width: 100%"></el-cascader>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">确定</el-button>
      <el-button @click="cancelForm">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import {onMounted, reactive, ref, watchEffect} from 'vue';
import {ElMessage} from 'element-plus';
import {createOrUpdateUser, getDeptList, getRoleList} from "../api/user.js";

let form = reactive({
  userName: '',
  email: '',
  phone: '',
  position: '',
  status: '',
  roles: [],
  department: ''
});
const formRef = ref();

const rules = {
  username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
  email: [{required: true, message: '请输入邮箱', trigger: 'blur'}],
  phone: [{required: true, message: '请输入手机号', trigger: 'blur'}],
  position: [{required: true, message: '请输入岗位', trigger: 'blur'}],
  status: [{required: true, message: '请选择状态', trigger: 'change'}],
  roles: [{required: true, message: '请选择系统角色', trigger: 'change'}],
  department: [{required: true, message: '请选择所属部门', trigger: 'change'}]
};

const emit = defineEmits(['close']);

const ruleFormRef = ref();

const props = defineProps({
  operateData: {
    type: Object,
    default: () => {
      return {}
    }
  },
  action: {
    type: String,
    default: 'add'
  }
})

onMounted(
    async () => {
      console.log("operateData", props.operateData)
      await fetchDepts();
      await fetchRoles();
    }
)

watchEffect(() => {
  Object.assign(form, props.operateData)
})

const cancelForm = () => {
  form = {
    userName: '',
    email: '',
    phone: '',
    position: '',
    status: '',
    roles: [],
    department: ''
  };
  emit('close');
};

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {

    } else {
      console.log('error submit!');
      return false;
    }
  });
  await createOrUpdateUser(form);
  ElMessage.success('新增用户成功');
  emit('close');
};

const deptList = ref([]);
const deptProps = {
  checkStrictly: true,
  label: 'deptName',
  value: '_id',
  children: 'children'
}
const fetchDepts = async () => {
  deptList.value = await getDeptList()
};

const roleList = ref([]);
const fetchRoles = async () => {
  roleList.value = await getRoleList();
};
</script>
