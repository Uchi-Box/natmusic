
//防抖
export const debounce = (func, delay) => {
    let timer;
    return function (...args) {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
            clearTimeout(timer);
        }, delay);
    };
};


//处理歌手列表拼接歌手名字
export const getName = list => {
    let str = "";
    list.map((item, index) => {
        str += index === 0 ? item.name : "/" + item.name;
        return item;
    });
    return str;
};

//拼接出歌曲的url链接
export const getSongUrl = id => {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};

//转换歌曲播放时间
export const formatPlayTime = interval => {
    interval = interval | 0;// |0表示向下取整
    const minute = (interval / 60) | 0;
    const second = (interval % 60).toString().padStart(2, "0");
    return `${minute}:${second}`;
};


export const formatTime= time => {
    const intTime = Math.floor(time / 1000)
    let minutes = Math.floor(intTime / 60)
    let seconds = intTime % 60
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    return minutes + ':' + seconds
}


//判断一个对象是否为空对象
export const isEmptyObject = obj => !obj || Object.keys(obj).length === 0;

//格式化播放数
export const getCount = (count) => {
    if (count < 0) return;
    if (count < 10000) {
        return count;
    } else if (Math.floor (count / 10000) < 10000) {
        return Math.floor (count/1000)/10 + "万";
    } else  {
        return Math.floor (count / 10000000)/ 10 + "亿";
    }
}

// 随机算法
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
export function shuffle(arr) {
    let new_arr = [];
    arr.forEach(item => {
        new_arr.push(item);
    });
    for (let i = 0; i < new_arr.length; i++) {
        let j = getRandomInt(0, i);
        let t = new_arr[i];
        new_arr[i] = new_arr[j];
        new_arr[j] = t;
    }
    return new_arr;
}

// 找到当前的歌曲索引
export const findIndex = (song, list) => {
    return list.findIndex(item => {
        return song.id === item.id;
    });
};