var ffmpeg = require('fluent-ffmpeg');

var command = ffmpeg('../asset/test.mp4')
			.videoCodec('libx264')
			.audioCodec('libmp3lame')
			.size('320x240')
			.on('error',function (err) {
				console.log('错误: ' + err.message);
			})
			.on('end', function() {
				console.log('转化成功!');
			})
			.save('../dist/test.wav');
