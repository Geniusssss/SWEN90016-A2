<template>
    <div>
 
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Sentences</span>
                <!-- <el-button style="float: right; padding: 3px 0" type="text">Add</el-button> -->
            </div>

            <div>
                <div class="text item">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
                <div class="text item">
                    Ut enim ad minim veniam, quis nostrud exercitation. 
                </div>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Symbols</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div>
                <div class="text item">
                        ,
                </div>
                <div class="text item">
                        .
                </div>
                <div class="text item">
                        !
                </div>
                <div class="text item">
                        ?
                </div>
                <div class="text item">
                        :
                </div>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Images</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div>
                <el-row>
                    <el-col :span="8" class="image-card" >
                        <el-card class="" :body-style="{ padding: '0px' }">
                            <img src="../assets/Dhudhuroa_character.png" class="image">
                            <div style="padding: 14px;">
                                <span>Dhudhuroa language</span>
                                <div class="bottom clearfix">
                                <!-- <time class="time">{{ currentDate }}</time> -->
                                <!-- <el-button type="text" class="button">Action</el-button> -->
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8" class="image-card" >
                        <el-card  :body-style="{ padding: '0px' }">
                            <img src="../assets/static_page_old_paper.png" class="image">
                            <div style="padding: 14px;">
                                <span>Dhudhuroa Research Paper</span>
                                <div class="bottom clearfix">
                                <!-- <time class="time">{{ currentDate }}</time> -->
                                <!-- <el-button type="text" class="button">Action</el-button> -->
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                <!-- </el-row>
                <el-row> -->
                    <el-col :span="8" >
                        <el-card class="image-card" :body-style="{ padding: '0px' }">
                            <img src="https://www.chicken.ca/wp-content/uploads/2020/09/healthy-chick-burgers.jpg" class="image">
                            <div style="padding: 14px;">
                                <span>Delicious food</span>
                                <div class="bottom clearfix">
                                <!-- <time class="time">{{ currentDate }}</time> -->
                                <!-- <el-button type="text" class="button">Action</el-button> -->
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Songs</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div class="text item">
                <h4>Sample MP3</h4>
                <audio controls>
                    <source src="../assets/sample.mp3" type="audio/mpeg">
                    Your browser does not support the audio tag.
                </audio>
                
            </div>
        </el-card>
    </div>
</template>
  
<script>
export default {
    // import VueAudio from 'vue-audio';
    name: 'EnglishStatic',
    data() {
        return {
            currentDate: new Date()
        };
    },
    methods: {
        routerTo(path) {
            this.$router.push(path)
        },
    }
}
</script>
  
<style scoped>
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 680px;
    margin-left: 100px;
    margin-bottom: 10px;
  }

  .image-card {
    margin-left: 10px;
    margin-bottom: 10px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>