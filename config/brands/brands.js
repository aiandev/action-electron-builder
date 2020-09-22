module.exports = {
	phonedotcom: {
		name: "my.phone.com",
		brand: "phonedotcom",
		productName: "My Phone.com",
		homepage: "https://phone.com/",
		supportPage: "https://phone.com/support",
		host: "https://preprod.my.phone.com",
		hostList:{
			prod: "https://my.phone.com",
			preprod: "https://preprod.my.phone.com",
			stage: "https://stage.my.phone.com",
			pcdev: "https://pcdev.my.phone.com"
		},
		author: {
			name: "Phone.com LLC",
			email: "support@phone.com",
			url: "https://phone.com/",
		},
		description: "",
		license: "",
		build: {
			appId: "test.com.phone.my",
			productName: "My Phone.com",
			copyright: "Copyright © year MyPhone LLC",
			artifactName: "phonedotcom-${channel}.${ext}",
			generateUpdatesFilesForAllChannels: true,
			publish: {
				provider: "s3",
				bucket: "mypdc-dist-${env.ELECTRON_APP_STAGE}",
				region: "us-east-1",
				path: "phonedotcom/${os}/",
				channel: "latest",
				acl: "public-read",
				url: "https://mypdc-dist-${env.ELECTRON_APP_STAGE}.s3.amazonaws.com",
			},
			dmg: {
				sign: true,
			},
			mac: {
				category: "public.app-category.business",
				icon: "./public/icons/icon512.phonedotcom.png",
			},
			protocols: {
				name: "my-phone.com",
				schemes: {
					first: "myphonecom",
					second: "tel",
					lastone: "custom-myphone",
				},
			},
			linux: {
				target: ["AppImage", "deb"],
				icon: "./public/icons/icon512.phonedotcom.png",
			},
			win: {
				target: "nsis",
				icon: "./public/icons/icon512.phonedotcom.png",
			},
			squirrelWindows: {
				iconUrl:
					"https://3macae71618368hq3ytkqe1c-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/greencircle@2x.png",
			},
			nsis: {
				oneClick: false,
				perMachine: false,
			},
		},
		env: {
			ELECTRON_APP_STAGE: "${env.ELECTRON_APP_STAGE}",
		},
	},
	revenuewell: {
		name: "revenuewell.com",
		brand: "revenuewell",
		productName: "Revenue Well",
		homepage: "https://revenuewell.com",
		supportPage: "https://revenuewell.com/support",
		host: "https://preprod.revenuewell.phone.com",
		hostList:{
			prod: "https://revenuewell.phone.com",
			preprod: "https://preprod.revenuewell.phone.com",
			stage: "https://stage.revenuewell.phone.com",
			pcdev: "https://pcdev.revenuewell.phone.com"
		},
		author: {
			name: "Revenue Well LLC",
			email: "support@revenuewell.com",
			url: "https://revenuewell.com/",
		},
		description: "",
		license: "",
		build: {
			appId: "test.com.revenue.well",
			productName: "Revenue Well",
			copyright: "Copyright © year Revenuewell LLC",
			artifactName: "revenuewell-${channel}.${ext}",
			generateUpdatesFilesForAllChannels: true,
			publish: {
				provider: "s3",
				bucket: "mypdc-dist-${env.ELECTRON_APP_STAGE}",
				region: "us-east-1",
				path: "revenuewell/${os}/",
				channel: "latest",
				acl: "public-read",
				url: "https://mypdc-dist-${env.ELECTRON_APP_STAGE}.s3.amazonaws.com",
			},
			dmg: {
				sign: false,
			},
			mac: {
				category: "public.app-category.business",
				icon: "./public/icons/icon512.revenuewell.png",
			},
			protocols: {
				name: "revenue-well.com",
				schemes: {
					first: "revenuewellcom",
					second: "tel",
					lastone: "customrevenuewell",
				}
			},
			linux: {
				target: ["AppImage", "deb"],
				icon: "./public/icons/icon512.revenuewell.png",
			},
			win: {
				target: "nsis",
				icon: "./public/icons/icon512.revenuewell.png",
			},
			squirrelWindows: {
				iconUrl: "https://pbs.twimg.com/profile_images/917852851656974336/LKpdIOai_400x400.jpg",
			},
			nsis: {
				oneClick: false,
				perMachine: false,
			},
		},
		env: {
			ELECTRON_APP_STAGE: "${env.ELECTRON_APP_STAGE}",
		},
	},
}
