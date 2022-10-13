<template>
    <div>
        <h1>Latest Researches</h1>

        <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            prop="name"
            label="Research"
            width="780">
        </el-table-column>
        <el-table-column
            prop="date"
            label="Date"
            width="180">
        </el-table-column>
        <el-table-column
        fixed="right"
        label=""
        width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">View</el-button>
                <!-- <el-button type="text" size="small">Edit</el-button> -->
            </template>
        </el-table-column>
        <!-- <el-table-column
            prop="address"
            label="Addr">
        </el-table-column> -->
        </el-table>
    </div>
</template>

<script>
    export default {
      data() {
        return {
            tableData: [{
                id: 1,
            date: '2022-07-02',
            name: 'The Dhudhuroa Language of Victoria',
            address: ''
            }, {
            id: 2,
            date: '2022-05-14',
            name: 'The Dhudhuroa Language of Northeastern Victoria: A Description Based on Historical Sources',
            address: ''
                }, {
            id: 3,
            date: '2021-02-21',
            name: 'Advances in the Interpretation of Historical Source Spellings for Dhudhuroa and Waywurru',
            address: ''
                }, {
            id: 4,
            date: '2020-05-10',
            name: 'Dhudhuroa and Yaithmathang languages and social groups in north-east Victoria – a reconstruction',
            address: ''
          }, {
            id: 5,
            date: '2020-04-03',
            name: 'Aboriginal Language Areas In Victoria',
            address: ''
          }, {
            id: 6,
            date: '2020-03-22',
            name: 'Some thoughts on Dhudhuroa in the Upper Murray',
            address: ''
          }, {
            id: 7,
            date: '2020-02-19',
            name: 'Folklore in Contemporary Australian Literature: Baba Yaga as guardian and mentor in antipodean narratives',
            address: ''
          }, {
            id: 8,
            date: '2020-02-12',
            name: 'Pallanganmiddang: a language of the Upper Murray',
            address: ''
          }, {
            id: 9,
            date: '2020-02-02',
            name: 'Aboriginal language areas in Northeast Victoria: Mogullumbidj reconsidered',
            address: ''
          }, {
            id: 10,
            date: '2020-01-19',
            name: 'A linguistic renaissance in the south east of Australia',
            address: ''
          }]
        }
     },

        methods: {
            handleClick(row) {
                // console.log(row);
                    this.$message(row.name);
                    if (row.id === 1) {
                        window.location.href ='https://www.jstor.org/stable/659469#metadata_info_tab_contents';
                    } else if (row.id === 2) {
                        window.location.href ='https://search.informit.org/doi/abs/10.3316/ielapa.853227479821874';
                    } else if (row.id === 3) {
                        window.location.href ='https://search.informit.org/doi/abs/10.3316/ielapa.742294029541541';
                    } else if (row.id === 4) {
                        window.location.href ='https://www.jstor.org/stable/24046829';
                    } else if (row.id === 5) {
                        window.location.href ='https://www.researchgate.net/profile/Ian-Clark-4/publication/251839435_Aboriginal_Language_Areas_In_Victoria/links/568baf5f08ae1975839f8dcc/Aboriginal-Language-Areas-In-Victoria.pdf';
                    } else if (row.id === 6) {
                        window.location.href ='https://lifeonspringcreek.com/tag/pallanganmiddang/';
                    } else if (row.id === 7) {
                        window.location.href ='https://researchoutput.csu.edu.au/ws/portalfiles/portal/71247834/Melissa_Boyes_Thesis.pdf';
                    } else if (row.id === 8) {
                        window.location.href ='https://www.jstor.org/stable/24046758';
                    } else if (row.id === 9) {
                        window.location.href ='https://search.informit.org/doi/abs/10.3316/ielapa.201211772';
                    } else if (row.id === 10) {
                        window.location.href ='https://openresearch-repository.anu.edu.au/bitstream/1885/146765/1/617%20Senft%20Ed.pdf#page=181';
                    }
            },
            routerTo(path) {
             this.$router.push(path)
            },
        },
    }
  </script>