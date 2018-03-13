var ffmpeg = require('fluent-ffmpeg');

var command = ffmpeg('../asset/5-2 随堂小测试.mp4')
			.videoCodec('libx264')
			.audioCodec('libmp3lame')
			.on('error',function (err) {
				console.log('错误: ' + err.message);
			})
			.on('end', function() {
				console.log('转化成功!');
			})
			.save('../dist/5-2 随堂小测试.wav');
