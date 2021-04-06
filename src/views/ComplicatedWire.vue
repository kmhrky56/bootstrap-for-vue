<template>
    <div>鋭意製作中</div>
    <!-- <b-container fluid>
        <b-row>
            ワイヤーを{{cut()}}
            {{selectedWire}}
        </b-row>
        <b-row>
            <b-col><b-btn @click="clearCheckboxWire">クリア</b-btn></b-col>
            <b-col><b-checkbox v-model="selectedWire" value="red"  label="赤"></b-checkbox></b-col>
            <b-col><b-checkbox v-model="selectedWire" value="blue" label="青"></b-checkbox></b-col>
            <b-col><b-checkbox v-model="selectedWire" value="star" label="星付き"></b-checkbox></b-col>
            <b-col><b-checkbox v-model="selectedWire" value="led"  label="LED点灯"></b-checkbox></b-col>
        </b-row>
        <b-row>
            <b-col><b-btn @click="clearCheckboxCase">クリア</b-btn></b-col>
            <b-col><b-checkbox v-model="selectedCase" value="odd"      label="シリアルナンバーの最後の数字が偶数か"></b-checkbox></b-col>
            <b-col><b-checkbox v-model="selectedCase" value="parallel" label="パラレルポート"></b-checkbox></b-col>
            <b-col><b-checkbox v-model="selectedCase" value="battery"  label="バッテリーが二本以上"></b-checkbox></b-col>
        </b-row>
    </b-container> -->
</template>
<script>
export default {
    name:"ComplicatedWire",
    data(){
        return {
            selectedCase:[],
            selectedWire:[],
        };
    },

    computed:{

    },

    methods:{
        clearCheckboxCase(){
            this.selectedCase = [];
        },

        clearCheckboxWire(){
            this.selectedWire = [];
        },

        cut(){
            const existsWire = t => this.selectedWire.some(e => {
                console.log("t:",t, e);
                // return true;
                return t.some(type => e == type);
            });
            const existsCase = c => this.selectedCase.some(e => e == c);

            const CUT = "切る";
            const DONT_CUT = "切らない";

            let result = DONT_CUT;

            // 白のみ
            if(this.selectedWire.length == 0)
            {
                result = CUT;
            }

            // 星のみ
            if(this.selectedWire.length == 1 && existsWire(["star"]))
            {
                result = CUT;
            }

            // 星、LED バッテリー2本以上
            if(this.selectedWire.length == 2 && existsWire(["star", "led"] && existsCase("battery")))
            {
                result = CUT;
            }

            // 赤
            if(existsWire(["red"]))
            {
                // 赤のみ シリアルナンバー末尾が偶数
                if(this.selectedWire.length == 1 && existsCase("odd"))
                {
                    result = CUT;
                }

                // 赤、星
                if(this.selectedWire.length == 2 && existsWire(["star"]))
                {
                    result = CUT;
                }

                // (赤、LED) or (赤、星、LED) バッテリー2本以上
                if(!existsWire(["blue"]) && existsCase("battery"))
                {
                    result = CUT;
                }
            }

            // 青
            if(existsWire(["blue"]))
            {
                // 青のみ シリアルナンバー末尾が偶数
                if(this.selectedWire.length == 1 && existsCase("odd"))
                {
                    result = CUT;
                }

                // (青、LED) or (青、星、LED) パラレルポートあり
                if(!existsWire(["red"]) && existsCase("parallel"))
                {
                    result = CUT;
                }
            }

            // 赤、青
            if(existsWire(["red", "blue"]))
            {
                // (赤、青) or (赤、青、LED) シリアルナンバー末尾が偶数
                if(!existsWire(["star"]) && existsCase("odd"))
                {
                    result = CUT;
                }

                // 赤、青、星 パラレルポートあり
                if(this.selectedWire.length == 3 && existsWire(["star"]) && existsCase("parallel"))
                {
                    result = CUT;
                }
            }

            return result;
        }
    },
}    
</script>