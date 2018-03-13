var ffmpeg = require('fluent-ffmpeg');

//针对.flv格式
//If you intend to encode FLV videos, you must have either flvtool2 or flvmeta installed and in your PATH or fluent-ffmpeg won't be able to produce streamable output files. If you set either the FLVTOOL2_PATH or FLVMETA_PATH, fluent-ffmpeg will try to use it instead of searching in the PATH.var command = ffmpeg('../asset/abc.flv')
	.videoCodec('libx264')
	.format('mp4')
	// .audioBitrate('16k')
	.on('error',function (err) {
		console.log('错误: ' + err.message);
	})
	.on('end', function() {
		console.log('转化成功!');
	})
	.save('../dist/test.mp4');