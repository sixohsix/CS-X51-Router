inlets = 3;

var bri = 0;
var sat = 0;
var hue = 0;
var on = false;

function msg_int(v) {
	if (inlet = 0) {
		bri = v;
	} else if (inlet = 1) {
		sat = v;
	} else if (inlet = 2) {
		hue = v;
	}
	if (bri > 0 || on) {
		do_light_change();
	}
}

function do_light_change() {
	var data;
	if (bri <= 0 && on) {
		data = {"on": false};
	} else {
		data = {
			"bri": bri,
			"sat": sat,
			"hue": hue,
		};
		if (! on) {
			data.on = true;
		}
	}
}