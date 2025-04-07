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

    <!-- 新增用户对话框 -->
    <el-dialog v-model="dialogVisible" title="新增用户" width="50%">
      <add-user-form @close="dialogVisible = false" :operateData="operateForm" :action="action"></add-user-form>
    </el-dialog>

    <!-- 用户列表 -->
    <el-table :data="users" style="width: 100%" @selection-change="handleSelectionChange" height="500px">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="userId" label="用户ID" width="120"></el-table-column>
      <el-table-column prop="userName" label="用户名" width="120"></el-table-column>
      <el-table-column prop="userEmail" label="用户邮箱" width="200"></el-table-column>
      <el-table-column prop="role" label="用户角色" width="120" :formatter="roleFormatter"></el-table-column>
      <el-table-column prop="state" label="用户状态" width="120" :formatter="stateFormatter"></el-table-column>
      <el-table-column prop="createTime" label="注册时间" width="200" :formatter="dateFormatter"></el-table-column>
      <el-table-column prop="lastLoginTime" label="最后登录时间" width="200" :formatter="dateFormatter"></el-table-column>
      <el-table-column label="操作" width="200">
        <template #default="scope">
          <el-button @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        class="pagination"
        v-model:current-page="pager"
        :page-size="pager.pageSize"
        layout="total, prev, pager, next"
        :total="pager.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup>
import {ref, onMounted, reactive} from 'vue';
import {deleteUsers, getUserList} from "../api/user.js";
import {ElMessage} from "element-plus";
import AddUserForm from "../components/AddUserForm.vue";

// 初始化数据
const search = ref({
  userId: '',
  userName: '',
  userStatus: ''
});
const pager = reactive({
  page: 1,
  pageSize: 10,
  total: 0
})

const users = ref([]);

const selectedUsers = ref([]);

const roleFormatter = (row, column) => {
  return {
    0: '管理员',
    1: '普通用户'
  }[row.role]||'';
}

const stateFormatter = (row, column) => {
  return {
    0: '在职',
    1: '离职'
  }[row.state]||'';
}

const dateFormatter = (row, column) => {
  const date = new Date(row[column.property]);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

onMounted(() => {
  // 初始化用户列表数据
  fetchUserList();
})

const fetchUserList = async (params) => {
  try {
    const {page, list} = await getUserList(params);
    users.value = list;
    pager.total = page.total;
  } catch (error) {
    console.error('Failed to fetch user list:', error);
  }
};

// 方法定义
const handleSearch = () => {
  let params = {
    page: pager.page,
    pageSize: pager.pageSize,
    ...search.value
  };
  fetchUserList(params);
};

const resetSearch = () => {
  search.value = {
    userId: '',
    userName: '',
    userStatus: ''
  };
};

const dialogVisible = ref(false);

const operateForm = ref({});
const action = ref('add');
const handleAdd = () => {
  dialogVisible.value = true;
  operateForm.value = {};
  action.value = 'add';
};

const handleBatchDelete = () => {
  if (selectedUsers.value.length === 0) {
    ElMessage({
      message: '请选择要删除的用户',
      type: 'warning',
    });
    return;
  }
  deleteUsers({
    userIds: selectedUsers.value.map(user => user.userId)
  });
  ElMessage({
    message: '删除成功',
    type: 'success',
  });
  fetchUserList();
};

const handleSelectionChange = (val) => {
  selectedUsers.value = val;
};

const handleEdit = (index, row) => {
  dialogVisible.value = true;
  operateForm.value = row;
  action.value = 'edit';
};

const handleDelete = (index, row) => {
  deleteUsers({
    userIds: [row.userId]
  });
  ElMessage({
    message: '删除成功',
    type: 'success',
  })
  fetchUserList();
};

const handleSizeChange = (val) => {
  pager.pageSize = val;
  fetchUserList();
};

const handleCurrentChange = (val) => {
  pager.page = val;
  fetchUserList();
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

  .pagination {
    margin-top: 5px;
  }

  background-color: #ffffff;
  padding: 10px;
  height: 100%;
}
</style>
