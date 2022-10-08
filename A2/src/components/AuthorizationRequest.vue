<template>
    <el-container>
        <el-header>Home</el-header>
        <el-main>
            <h1>Nice to see you back, user {{this.user.username}}!</h1>
            <div class="block">
                <span class="demonstration">Restricted Languages Pages</span>
                <el-select v-model="selectedRestrictedLangPage" placeholder="Select">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-button class="button" @click="accessRestritedLangPage">Go</el-button>
            </div>

            <div>
                <el-dialog title="Request Form" :visible.sync="dialogFormVisible">
                    <el-form :model="form">
                        <!-- <el-form-item label="Access Item name" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item> -->
                        <el-form-item label="Access Type:" :label-width="formLabelWidth">
                            <el-select v-model="form.region" placeholder="Please select your access type">
                                <el-option label="READ ONLY" value="read"></el-option>
                                <el-option label="WRITE ONLY" value="write"></el-option>
                                <el-option label="FULL ACCESS" value="full"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="requestPageAccess">Submit Request</el-button>
                    </div>
                </el-dialog>
            </div>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
    </el-container>
</template>
  
<script>
export default {
    name: 'AuthorizationRequest',
    data() {
        return {
            user: '',
            options: [
                {
                    value: 'item-1',
                    label: 'English Language - Static Example'
                },
                {
                    value: 'item-2',
                    label: 'Indigenous Dhudhuroa Language'
                },
                {
                    value: 'item-3',
                    label: 'English Language - Dynamic Demonstration Example'
                },
            ],
            selectedRestrictedLangPage: '',
            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px'
        }
    },
    created() {
        this.getCurrentUser();
    },
    methods: {
        getCurrentUser() {
            var result = JSON.parse(localStorage.getItem("currentUser") || '[]');
            this.user = result;
        },
        accessRestritedLangPage() {
            if (this.checkIfUserhaveAccess()) {
                alert("You do have access to the page!")
            }
            else {
                // if do not have access to the page, pop up a window with 2 buttons
                // 1st button: Request Access; 2nd button: cancel
                this.$alert('You do not have access to the specified page!'
                    , 'Request access to the page?',
                    {
                        // confirmButtonText: 'confirm',
                        // cancelButtonText: 'Cancel',
                        showConfirmButton: true,
                        showCancelButton: true,
                    }
                ).then(() => {
                    // alert("You got here");
                    this.dialogFormVisible = true;
                    // this.requestPageAccess();
                }
                );
            }
        },
        checkIfUserhaveAccess() {
            return false;
        },
        requestPageAccess() {
            this.dialogFormVisible = false;
            this.$message("Request submitted!")
            // Implement the request access logic here
            // Add the request info to DB 
        }

    }
};
</script>
  
<style scoped>
.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>