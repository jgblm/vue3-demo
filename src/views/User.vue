<template>
  <div class="user-management">
    <!-- 查询区域 -->
    <el-form :inline="true" class="query-form">
      <el-form-item label="用户ID">
        <el-input v-model="search.userId" placeholder="请输入用户ID"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="search.userName" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="用户状态">
        <el-select v-model="search.userStatus" placeholder="请选择用户状态" clearable class="status-width">
          <el-option label="在职" value="0"></el-option>
          <el-option label="离职" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearch">查询</el-button>
        <el-button @click="resetSearch">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 操作按钮 -->
    <div class="operation-buttons">
      <el-button type="primary" @click="handleAdd">新增</el-button>
      <el-button type="danger" @click="handleBatchDelete">批量删除</el-button>
    </div>

    <!-- 用户列表 -->
    <el-table :data="users" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="userId" label="用户ID" width="120"></el-table-column>
      <el-table-column prop="userName" label="用户名" width="120"></el-table-column>
      <el-table-column prop="userEmail" label="用户邮箱" width="200"></el-table-column>
      <el-table-column prop="userRole" label="用户角色" width="120"></el-table-column>
      <el-table-column prop="userStatus" label="用户状态" width="120"></el-table-column>
      <el-table-column prop="registerTime" label="注册时间" width="200"></el-table-column>
      <el-table-column prop="lastLoginTime" label="最后登录时间" width="200"></el-table-column>
      <el-table-column label="操作" width="200">
        <template #default="scope">
          <el-button @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import {ref} from 'vue';

// 初始化数据
const search = ref({
  userId: '',
  userName: '',
  userStatus: ''
});

const users = ref([
  {
    userId: '1000002',
    userName: 'admin',
    userEmail: 'admin@imoooc.com',
    userRole: '管理员',
    userStatus: '在职',
    registerTime: '2021-01-17 21:32:06',
    lastLoginTime: '2021-01-17 21:32:06'
  },
  // 其他用户数据...
]);

const selectedUsers = ref([]);

// 方法定义
const handleSearch = () => {
  console.log('搜索条件:', search.value);
};

const resetSearch = () => {
  search.value = {
    userId: '',
    userName: '',
    userStatus: ''
  };
};

const handleAdd = () => {
  console.log('新增用户');
};

const handleBatchDelete = () => {
  console.log('批量删除用户:', selectedUsers.value);
};

const handleSelectionChange = (val) => {
  selectedUsers.value = val;
};

const handleEdit = (index, row) => {
  console.log('编辑用户:', row);
};

const handleDelete = (index, row) => {
  console.log('删除用户:', row);
};
</script>

<style scoped lang="scss">
.user-management {
  .query-form {
    margin-bottom: 20px;
  }

  .operation-buttons {
    margin-bottom: 20px;
  }

  // 设置用户状态选择框的宽度
  .status-width {
    width: 200px; // 根据需要调整宽度
  }

  background-color: #ffffff;
  padding: 10px;
  height: 100%;
}
</style>
