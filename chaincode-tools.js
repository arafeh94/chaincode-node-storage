module.exports = {
    uuid() {
        var dt = new Date().getTime();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    },

    activity: {
        '1': "idle/still",
        '2': "train/metro/tram",
        '3': "walk",
        '4': "car/bus/motorbike",
        '5': "bicycle",
        '6': "run",
        '7': "skateboard",
    },
    sizeOf(obj){
        let size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    }

};
