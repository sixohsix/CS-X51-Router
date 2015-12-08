inlets = 1;

function msg_int(v) {
	var d = new Dict("post_data");
	var on_val;
	if (v > 0)
		on_val = true;
	else
		on_val = false;
	d.set("on", on_val);
	outlet(0, "bang");
}
