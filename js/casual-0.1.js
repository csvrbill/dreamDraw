var casual = {};
casual.trace = function() {
	for (var c = [], a = 0; a < arguments.length; a++) c.push(arguments[a]);
	typeof console != "undefined" && typeof console.log == "function" && console.log(c.join(" "))
};
casual.inherit = function(c, a) {
	var b = function() {};
	b.prototype = a.prototype;
	c.superClass = a.prototype;
	c.prototype = new b;
	c.prototype.constructor = c
};
casual.delegate = function(c, a) {
	var b = a || window;
	if (arguments.length > 2) {
		var d = Array.prototype.slice.call(arguments, 2);
		return function() {
			var e = Array.prototype.slice.call(arguments);
			Array.prototype.unshift.apply(e, d);
			return c.apply(b, e)
		}
	} else return function() {
		return c.apply(b, arguments)
	}
};
casual.copy = function(c, a, b) {
	if (typeof c !== "object") return c;
	var d = c.valueOf();
	if (c != d) return new c.constructor(d);
	if (c instanceof c.constructor && c.constructor !== Object) {
		d = a ? new a : casual.clone(c.constructor.prototype);
		for (var e in c) if (a || c.hasOwnProperty(e)) d[e] = c[e]
	} else {
		d = {};
		for (e in c) d[e] = c[e]
	}
	if (b) for (e in b) d[e] = b[e];
	return d
};
casual.clone = function(c) {
	casual.__cloneFunc.prototype = c;
	return new casual.__cloneFunc
};
casual.__cloneFunc = function() {};
(function() {
	var c = function(a, b, d, e, f, g) {
			this.a = a != undefined ? a : 1;
			this.b = b != undefined ? b : 0;
			this.c = d != undefined ? d : 0;
			this.d = e != undefined ? e : 1;
			this.tx = f != undefined ? f : 0;
			this.ty = g != undefined ? g : 0
		};
	casual.Matrix = c;
	c.prototype.concat = function(a) {
		var b = this.a,
			d = this.c,
			e = this.tx;
		this.a = b * a.a + this.b * a.c;
		this.b = b * a.b + this.b * a.d;
		this.c = d * a.a + this.d * a.c;
		this.d = d * a.b + this.d * a.d;
		this.tx = e * a.a + this.ty * a.c + a.tx;
		this.ty = e * a.b + this.ty * a.d + a.ty
	};
	c.prototype.concatTransform = function(a, b, d, e, f, g, h) {
		var i = 1,
			j = 0;
		if (f % 360) {
			f = f * Math.PI / 180;
			i = Math.cos(f);
			j = Math.sin(f)
		}
		if (g != 0) this.tx -= g;
		if (h != 0) this.ty -= h;
		this.concat(new c(i * d, j * d, -j * e, i * e, a, b))
	};
	c.prototype.rotate = function(a) {
		var b = Math.cos(a);
		a = Math.sin(a);
		var d = this.a,
			e = this.c,
			f = this.tx;
		this.a = d * b - this.b * a;
		this.b = d * a + this.b * b;
		this.c = e * b - this.d * a;
		this.d = e * a + this.d * b;
		this.tx = f * b - this.ty * a;
		this.ty = f * a + this.ty * b
	};
	c.prototype.scale = function(a, b) {
		this.a *= a;
		this.d *= b;
		this.tx *= a;
		this.ty *= b
	};
	c.prototype.translate = function(a, b) {
		this.tx += a;
		this.ty += b
	};
	c.prototype.identity = function() {
		this.a = this.d = 1;
		this.b = this.c = this.tx = this.ty = 0
	};
	c.prototype.invert = function() {
		var a = this.a,
			b = this.b,
			d = this.c,
			e = this.d,
			f = this.tx,
			g = a * e - b * d;
		this.a = e / g;
		this.b = -b / g;
		this.c = -d / g;
		this.d = a / g;
		this.tx = (d * this.ty - e * f) / g;
		this.ty = -(a * this.ty - b * f) / g
	};
	c.prototype.clone = function() {
		return new c(this.a, this.b, this.c, this.d, this.tx, this.ty)
	};
	c.prototype.toString = function() {
		return "(a=" + this.a + ", b=" + this.b + ", c=" + this.c + ", d=" + this.d + ", tx=" + this.tx + ", ty=" + this.ty + ")"
	}
})();
(function() {
	var c = function(a, b, d, e) {
			this.x = a != undefined ? a : 0;
			this.y = b != undefined ? b : 0;
			this.width = d != undefined ? d : 0;
			this.height = e != undefined ? e : 0
		};
	casual.Rectangle = c;
	c.prototype.intersects = function(a) {
		return this.x <= a.x + a.width && a.x <= this.x + this.width && this.y <= a.y + a.height && a.y <= this.y + this.height
	};
	c.prototype.intersection = function(a) {
		var b = Math.max(this.x, a.x),
			d = Math.min(this.x + this.width, a.x + a.width);
		if (b <= d) {
			var e = Math.max(this.y, a.y);
			a = Math.min(this.y + this.height, a.y + a.height);
			if (e <= a) return new c(b, e, d - b, a - e)
		}
		return null
	};
	c.prototype.containsPoint = function(a, b) {
		return this.x <= a && a <= this.x + this.width && this.y <= b && b <= this.y + this.height
	};
	c.prototype.clone = function() {
		return new c(this.x, this.y, this.width, this.height)
	};
	c.prototype.toString = function() {
		return "(x=" + this.x + ", y=" + this.y + ", width=" + this.width + ", height=" + this.height + ")"
	}
})();
(function() {
	var c = {
		_counter: 0
	};
	casual.NameUtil = c;
	c.getUID = function() {
		return c._counter++
	};
	c.createUniqueName = function(a) {
		var b = a.charCodeAt(a.length - 1);
		if (b >= 48 && b <= 57) a += "_";
		return a + c.getUID()
	};
	c.displayObjectToString = function(a) {
		var b;
		for (a = a; a != null; a = a.parent) {
			var d = a.id != null ? a.id : a.name;
			b = b == null ? d : d + "." + b;
			if (a == a.parent || a.parent instanceof Stage) break
		}
		return b
	}
})();
(function() {
	var c = function(a, b, d) {
			this.type = a;
			this.params = this.currentTarget = this.target = null;
			this.bubbles = b != undefined ? b : false;
			this.cancelable = d != undefined ? d : false
		};
	casual.EventBase = c;
	c.prototype.stopPropagation = function() {};
	c.prototype.preventDefault = function() {};
	c.prototype.clone = function() {
		return casual.copy(this)
	};
	c.prototype.dispose = function() {
		delete this.type;
		delete this.target;
		delete this.currentTarget;
		delete this.params
	};
	c.prototype.toString = function() {
		return "[EventBase type=" + this.type + "]"
	}
})();
(function() {
	var c = function(a, b, d) {
			casual.EventBase.call(this, a, b, d);
			this.mouseY = this.mouseX = 0
		};
	casual.inherit(c, casual.EventBase);
	casual.StageEvent = c;
	c.ENTER_FRAME = "enterframe";
	c.MOUSE_DOWN = "mousedown";
	c.MOUSE_UP = "mouseup";
	c.MOUSE_MOVE = "mousemove";
	c.MOUSE_OVER = "mouseover";
	c.MOUSE_OUT = "mouseout";
	c.supportTouch = function() {
		return "ontouchstart" in document
	};
	c.prototype.toString = function() {
		return "[StageEvent type=" + this.type + ", mouseX=" + this.mouseX + ", mouseY=" + this.mouseY + "]"
	}
})();
(function() {
	var c = function() {};
	casual.EventManager = c;
	c._maps = {};
	c._sources = {};
	c._listeners = {};
	c._counter = 1;
	c.addEventListener = function(a, b, d) {
		var e = c._maps[b];
		if (e == undefined) e = c._maps[b] = {};
		var f = c._sources[a];
		if (f == undefined) f = c._sources[a] = c._counter++;
		if (e[f] == undefined) e[f] = {};
		e = e[f];
		a = c._listeners[d];
		if (a == undefined) a = c._listeners[d] = c._counter++;
		if (!(a in e)) {
			e = e[a] = {};
			e.type = b;
			e.src = f;
			e.listener = d;
			return true
		}
		return false
	};
	c.removeEventListener = function(a, b, d) {
		var e = c._maps[b];
		if (e == undefined) return false;
		var f = c._sources[a];
		if (f == undefined) return false;
		e = e[f];
		if (e == undefined) return false;
		var g = true,
			h;
		for (h in e) if (c._listeners[d] == h) {
			delete c._listeners[d];
			delete e[h]
		} else g = false;
		if (g) {
			delete c._maps[b][f];
			delete c._sources[a]
		}
		return true
	};
	c.removeEventListenerByType = function(a, b) {
		var d = c._maps[b];
		if (d == undefined) return false;
		var e = c._sources[a];
		if (e == undefined) return false;
		d != undefined && delete d[e];
		e = true;
		for (var f in d) {
			e = false;
			break
		}
		e && delete c._maps[b];
		return true
	};
	c.removeAllEventListeners = function(a) {
		if (c._sources[a] == undefined) return false;
		for (var b in c._maps) {
			var d = c._maps[b];
			d[scrid] != undefined && delete d[scrid]
		}
		delete c._sources[a]
	};
	c.dispatchEvent = function(a, b) {
		var d = c._maps[b.type];
		if (d == undefined) return false;
		var e = c._sources[a];
		if (e == undefined) return false;
		d = d[e];
		if (d == undefined) return false;
		if (!b.target) b.target = a;
		for (var f in d) {
			e = d[f].listener;
			typeof e == "function" && e.call(a, b)
		}
		return true
	};
	c.hasEventListener = function(a, b) {
		var d = c._maps[b];
		if (d == undefined) return false;
		var e = c._sources[a];
		if (e == undefined) return false;
		return d[e] != undefined
	}
})();
(function() {
	var c = function() {};
	casual.EventDispatcher = c;
	c.prototype.addEventListener = function(a, b) {
		casual.EventManager.addEventListener(this, a, b)
	};
	c.prototype.removeEventListener = function(a, b) {
		casual.EventManager.removeEventListener(this, a, b)
	};
	c.prototype.removeEventListenerByType = function(a) {
		casual.EventManager.removeEventListenerByType(this, a)
	};
	c.prototype.removeAllEventListeners = function() {
		casual.EventManager.removeAllEventListeners(this)
	};
	c.prototype.dispatchEvent = function(a) {
		casual.EventManager.dispatchEvent(this, a)
	};
	c.prototype.hasEventListener = function(a) {
		return casual.EventManager.hasEventListener(this, a)
	}
})();
(function() {
	var c = function() {
			casual.EventDispatcher.call(this);
			this.name = NameUtil.createUniqueName("DisplayObject");
			this.id = null;
			this.height = this.width = this.y = this.x = 0;
			this.scaleY = this.scaleX = this.alpha = 1;
			this.regY = this.regX = this.rotation = 0;
			this.mouseEnabled = this.visible = true;
			this.useHandCursor = false;
			this.stage = this.parent = null
		};
	casual.inherit(c, casual.EventDispatcher);
	casual.DisplayObject = c;
	var a = document.createElement("canvas");
	a.width = a.height = 1;
	c.__hitTestContext = a.getContext("2d");
	c.__hitTestTolerance = 100;
	c.prototype.getCurrentWidth = function() {
		return Math.abs(this.width * this.scaleX)
	};
	c.prototype.getCurrentHeight = function() {
		return Math.abs(this.height * this.scaleY)
	};
	c.prototype.getStage = function() {
		if (this.stage) return this.stage;
		for (var b = this; b.parent;) b = b.parent;
		if (b instanceof casual.Stage) return this.stage = b;
		return null
	};
	c.prototype.localToGlobal = function(b, d) {
		var e = this.getConcatenatedMatrix();
		if (e == null) return {
			x: 0,
			y: 0
		};
		var f = new casual.Matrix(1, 0, 0, 1, b, d);
		f.concat(e);
		return {
			x: f.tx,
			y: f.ty
		}
	};
	c.prototype.globalToLocal = function(b, d) {
		var e = this.getConcatenatedMatrix();
		if (e == null) return {
			x: 0,
			y: 0
		};
		e.invert();
		var f = new casual.Matrix(1, 0, 0, 1, b, d);
		f.concat(e);
		return {
			x: f.tx,
			y: f.ty
		}
	};
	c.prototype.localToTarget = function(b, d, e) {
		b = this.localToGlobal(b, d);
		return e.globalToLocal(b.x, b.y)
	};
	c.prototype.getConcatenatedMatrix = function() {
		for (var b = new casual.Matrix, d = this; d != null; d = d.parent) {
			b.concatTransform(d.x, d.y, d.scaleX, d.scaleY, d.rotation, d.regX, d.regY);
			if (d instanceof casual.Stage) break
		}
		return b
	};
	c.prototype._transform = function(b, d) {
		if (d) {
			var e = this.localToGlobal(0, 0);
			if (e.x != 0 || e.y != 0) b.translate(e.x, e.y)
		} else b.translate(this.x, this.y);
		this.rotation % 360 > 0 && b.rotate(this.rotation % 360 / 180 * Math.PI);
		if (this.scaleX != 1 || this.scaleY != 1) b.scale(this.scaleX, this.scaleY);
		d || b.translate(-this.regX, -this.regY);
		b.globalAlpha *= this.alpha
	};
	c.prototype._render = function(b, d, e) {
		if (!(!this.visible || this.alpha <= 0)) {
			b.save();
			d || this._transform(b, e);
			this.render(b);
			b.restore()
		}
	};
	c.prototype.render = function() {};
	c.prototype.hitTestPoint = function(b, d, e, f) {
		if (!e) {
			f = this.globalToLocal(b, d);
			return f.x >= 0 && f.x <= this.getCurrentWidth() && f.y >= 0 && f.y <= this.getCurrentHeight()
		}
		e = c.__hitTestContext;
		e.setTransform(1, 0, 0, 1, -b, -d);
		this._render(e, false, true);
		f = f || c.__hitTestTolerance;
		b = false;
		try {
			if (e.getImageData(0, 0, 1, 1).data[3] >= f) b = true
		} catch (g) {
			trace("hitTestPoint:", this, g)
		}
		e.canvas.width = 0;
		e.canvas.width = 1;
		return b
	};
	c.prototype.hitTestObject = function(b, d, e) {
		var f = this.getRect(this.getStage()),
			g = b.getRect(this.getStage());
		if (!d) return f.intersects(g);
		f = f.intersection(g);
		e = e || c.__hitTestTolerance;
		if (f && f.width > 0 && f.height > 0) {
			d = false;
			try {
				var h = c.__hitTestContext;
				h.canvas.width = f.width;
				h.canvas.height = f.height;
				h.setTransform(1, 0, 0, 1, -f.x, -f.y);
				this._render(h, false, true);
				var i = h.getImageData(0, 0, f.width, f.height).data;
				h.canvas.width = 0;
				h.canvas.width = f.width;
				h.setTransform(1, 0, 0, 1, -f.x, -f.y);
				b._render(h, false, true);
				var j = h.getImageData(0, 0, f.width, f.height).data;
				for (b = 0; b < i.length;) {
					if ((i[b] > 0 || i[b + 1] > 0 || i[b + 2] > 0 || i[b + 3] >= e) && (j[b] > 0 || j[b + 1] > 0 || j[b + 2] > 0 || j[b + 3] >= e)) {
						d = true;
						break
					}
					b += 4
				}
			} catch (k) {}
			h.canvas.width = 0;
			h.canvas.width = h.canvas.height = 1;
			return d
		}
		return false
	};
	c.prototype.getRect = function(b) {
		b = this.localToTarget(0, 0, b);
		return new Rectangle(b.x, b.y, this.getCurrentWidth(), this.getCurrentHeight())
	};
	c.prototype.onMouseEvent = null;
	c.prototype.toString = function() {
		return NameUtil.displayObjectToString(this)
	}
})();
(function() {
	var c = function() {
			casual.DisplayObject.call(this);
			this.children = [];
			this.mouseChildren = true
		};
	casual.inherit(c, casual.DisplayObject);
	casual.DisplayObjectContainer = c;
	c.prototype.addChild = function(a) {
		if (this.getChildIndex(a) != -1) {
			a.parent = this;
			return a
		}
		a.parent && a.parent.removeChild(a);
		this.children[this.children.length] = a;
		a.parent = this;
		return a
	};
	c.prototype.addChildAt = function(a, b) {
		if (this.getChildIndex(a) != -1) {
			a.parent = this;
			return a
		}
		a.parent && a.parent.removeChild(a);
		this.children.splice(b, 0, a);
		a.parent = this;
		return a
	};
	c.prototype.removeChild = function(a) {
		return this.removeChildAt(this.children.indexOf(a))
	};
	c.prototype.removeChildAt = function(a) {
		if (a < 0 || a > this.children.length - 1) return false;
		var b = this.children[a];
		if (b != null) b.parent = null;
		this.children.splice(a, 1);
		return true
	};
	c.prototype.removeChildByName = function(a) {
		for (var b = 0, d = this.children.length; b < d; b++) if (this.children[b].name == a) return this.removeChildAt(b);
		return null
	};
	c.prototype.removeAllChildren = function() {
		for (; this.children.length > 0;) this.removeChildAt(0)
	};
	c.prototype.getChildByName = function(a) {
		for (var b = 0, d = this.children.length; b < d; b++) if (this.children[b].name == a) return this.children[b];
		return null
	};
	c.prototype.getChildAt = function(a) {
		if (a < 0 || a > this.children.length - 1) return null;
		return this.children[a]
	};
	c.prototype.getChildIndex = function(a) {
		return this.children.indexOf(a)
	};
	c.prototype.setChildIndex = function(a, b) {
		if (a.parent == this) {
			var d = this.children.indexOf(a);
			if (b != d) {
				this.children.splice(d, 1);
				this.children.splice(b, 0, a)
			}
		}
	};
	c.prototype.contains = function(a) {
		return this.getChildIndex(a) != -1
	};
	c.prototype.getNumChildren = function() {
		return this.children.length
	};
	c.prototype.getObjectUnderPoint = function(a, b, d, e, f) {
		if (f) var g = [];
		for (var h = this.children.length - 1; h >= 0; h--) {
			var i = this.children[h];
			if (!(i == null || !i.mouseEnabled || !i.visible || i.alpha <= 0)) if (i instanceof c && i.mouseChildren && i.getNumChildren() > 0) {
				var j = i.getObjectUnderPoint(a, b, d, e, f);
				if (j) if (f) {
					if (j.length > 0) g = g.concat(j)
				} else return j;
				else if (i.hitTestPoint(a, b, d, e)) if (f) g.push(i);
				else return i
			} else if (i.hitTestPoint(a, b, d, e)) if (f) g.push(i);
			else return i
		}
		if (f) return g;
		return null
	};
	c.prototype.render = function(a) {
		for (var b = 0, d = this.children.length; b < d; b++) this.children[b]._render(a)
	}
})();
(function() {
	var c = function(a) {
			if (a == null) throw Error("Context can't be null!");
			casual.DisplayObjectContainer.call(this);
			this.name = NameUtil.createUniqueName("Stage");
			this.context = a;
			this.canvas = a.canvas;
			this.mouseY = this.mouseX = 0;
			this.usePixelTrace = this.traceMouseTarget = true;
			this.dragTarget = this.mouseTarget = null;
			this._frameRate = this._dragMouseY = this._dragMouseX = 0;
			this._pauseInNextFrame = this._paused = false;
			this.__intervalID = null;
			this.setFrameRate(20);
			if (casual.StageEvent.supportTouch()) {
				this.canvas.addEventListener("touchstart", casual.delegate(this.__touchHandler, this), false);
				this.canvas.addEventListener("touchmove", casual.delegate(this.__touchHandler, this), false);
				this.canvas.addEventListener("touchend", casual.delegate(this.__touchHandler, this), false)
			} else {
				this.canvas.addEventListener("mousedown", casual.delegate(this.__mouseHandler, this), false);
				this.canvas.addEventListener("mousemove", casual.delegate(this.__mouseHandler, this), false);
				this.canvas.addEventListener("mouseup", casual.delegate(this.__mouseHandler, this), false)
			}
		};
	casual.inherit(c, casual.DisplayObjectContainer);
	casual.Stage = c;
	c.prototype.setPaused = function(a, b) {
		if (this._paused != a) {
			this._paused = a;
			this._pauseInNextFrame = b || false
		}
	};
	c.prototype.getPaused = function() {
		return this._paused
	};
	c.prototype.getFrameRate = function() {
		return this._frameRate
	};
	c.prototype.setFrameRate = function(a) {
		if (this._frameRate != a) {
			this._frameRate = a;
			this.__intervalID != null && clearInterval(this.__intervalID);
			this.__intervalID = setInterval(casual.delegate(this.__enterFrame, this), 1E3 / this._frameRate)
		}
	};
	c.prototype.__touchHandler = function(a) {
		var b = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
		if (b) {
			var d = b.pageY || b.clientY || b.screenY;
			this.mouseX = (b.pageX || b.clientX || b.screenX) - this.canvas.offsetLeft;
			this.mouseY = d - this.canvas.offsetTop
		}
		this.traceMouseTarget && this.__getMouseTarget(a);
		b = {
			target: this.mouseTarget || this,
			mouseX: this.mouseX,
			mouseY: this.mouseY,
			button: 0
		};
		switch (a.type) {
		case "touchstart":
			b.type = "mousedown";
			break;
		case "touchmove":
			b.type = "mousemove";
			break;
		case "touchend":
			b.type = "mouseup"
		}
		b = casual.copy(a, casual.StageEvent, b);
		if (this.mouseTarget && this.mouseTarget.onMouseEvent) {
			this.mouseTarget.onMouseEvent(b);
			b.type == "mouseup" && this.mouseTarget.onMouseEvent(casual.copy(a, casual.StageEvent, {
				type: "mouseout"
			}))
		}
		this.dispatchEvent(b);
		a.preventDefault();
		a.stopPropagation()
	};
	c.prototype.__mouseHandler = function(a) {
		this.mouseX = a.pageX - this.canvas.offsetLeft;
		this.mouseY = a.pageY - this.canvas.offsetTop;
		this.traceMouseTarget && a.type == "mousemove" && this.__getMouseTarget(a);
		var b = casual.copy(a, casual.StageEvent);
		b.target = b.currentTarget = this.mouseTarget || this;
		b.mouseX = this.mouseX;
		b.mouseY = this.mouseY;
		this.mouseTarget && this.mouseTarget.onMouseEvent && this.mouseTarget.onMouseEvent(b);
		this.setCursor(this.mouseTarget && this.mouseTarget.useHandCursor ? "pointer" : "");
		this.dispatchEvent(b);
		a.preventDefault();
		a.stopPropagation()
	};
	c.prototype.__getMouseTarget = function(a) {
		var b = this.getObjectUnderPoint(this.mouseX, this.mouseY, this.usePixelTrace),
			d = this.mouseTarget;
		this.mouseTarget = b;
		if (d && d.onMouseEvent && d != b) {
			a = casual.copy(a, casual.StageEvent);
			a.type = "mouseout";
			a.target = a.currentTarget = d;
			a.mouseX = this.mouseX;
			a.mouseY = this.mouseY;
			d.onMouseEvent(a)
		}
	};
	c.prototype.__enterFrame = function() {
		if (!(this._paused && !this._pauseInNextFrame)) {
			this.dispatchEvent(new StageEvent(StageEvent.ENTER_FRAME));
			if (!this._paused || this._pauseInNextFrame) this._render(this.context, true);
			if (this._frameRate <= 0) {
				clearInterval(this.__intervalID);
				this.__intervalID = null
			}
		}
	};
	c.prototype.render = function(a, b) {
		if (!a) a = this.context;
		b ? this.clear(b.x, b.y, b.width, b.height) : this.clear();
		if (this.dragTarget) {
			this.dragTarget.x = this.mouseX - this._dragMouseX;
			this.dragTarget.y = this.mouseY - this._dragMouseY
		}
		c.superClass.render.call(this, a);
		if (this._pauseInNextFrame) {
			this._paused = true;
			this._pauseInNextFrame = false
		}
	};
	c.prototype.startDrag = function(a) {
		this.dragTarget = a;
		a = this.dragTarget.globalToLocal(this.mouseX, this.mouseY);
		this._dragMouseX = a.x;
		this._dragMouseY = a.y
	};
	c.prototype.stopDrag = function() {
		this.dragTarget = null
	};
	c.prototype.setCursor = function(a) {
		this.canvas.style.cursor = a
	};
	c.prototype.clear = function(a, b, d, e) {
		arguments.length >= 4 ? this.context.clearRect(a, b, d, e) : this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
	};
	c.prototype.getStageWidth = function() {
		return this.canvas.width
	};
	c.prototype.getStageHeight = function() {
		return this.canvas.height
	}
})();
(function() {
	var c = function(a, b) {
			casual.DisplayObject.call(this);
			this.name = NameUtil.createUniqueName("Bitmap");
			this.mouseEnabled = false;
			this.image = a;
			this.frame = b ? b : [0, 0, a.width, a.height];
			this.width = this.frame[2];
			this.height = this.frame[3];
			this.regX = this.frame[4] || 0;
			this.regY = this.frame[5] || 0
		};
	casual.inherit(c, casual.DisplayObject);
	casual.Bitmap = c;
	c.prototype.render = function(a) {
		a.drawImage(this.image, this.frame[0], this.frame[1], this.frame[2], this.frame[3], 0, 0, this.width, this.height)
	}
})();
(function() {
	var c = function() {
			casual.DisplayObjectContainer.call(this);
			this.name = NameUtil.createUniqueName("Sprite")
		};
	casual.inherit(c, casual.DisplayObjectContainer);
	casual.Sprite = c
})();
(function() {
	var c = function(a, b, d, e, f) {
			this.disObj = a;
			this.label = b || null;
			this.gotoFrame = d || 0;
			this.pauseFrames = e || 0;
			this.stop = f || false
		};
	casual.Frame = c;
	c.prototype.render = function(a, b, d) {
		if (b) this.disObj.x = b;
		if (d) this.disObj.y = d;
		this.disObj._render(a, false, false)
	}
})();
(function() {
	var c = function(a) {
			casual.Sprite.call(this);
			this.name = NameUtil.createUniqueName("MovieClip");
			this._frameLables = {};
			this._frames = [];
			a && this.addFrame(a);
			this.currentFrame = 1;
			this._frameDisObj = null;
			this._pauseFrames = 0;
			this._paused = false
		};
	casual.inherit(c, casual.Sprite);
	casual.MovieClip = c;
	c.prototype.addFrame = function(a) {
		if (a[0] instanceof casual.Frame || a[0] instanceof Array) for (var b in a) this.addFrame(a[b]);
		else this.setFrame(this._frames.length + 1, a)
	};
	c.prototype.addFrameAt = function(a, b) {
		this._frames.splice(b, 0, null);
		this.setFrame(b + 1, a)
	};
	c.prototype.setFrame = function(a, b) {
		var d;
		d = b instanceof casual.Frame ? b : new casual.Frame(b);
		this._frames[a - 1] = d;
		if (d.label) this._frameLables[d.label] = d;
		if (a == 1) {
			this._frameDisObj = d.disObj;
			this.width = Math.max(this.width, this._frameDisObj.width);
			this.height = Math.max(this.height, this._frameDisObj.height)
		}
	};
	c.prototype.getFrameNumber = function(a) {
		if (typeof a == "number") return a;
		var b = a;
		if (typeof b == "string") b = this._frameLables[a];
		for (a = 0; a < this._frames.length; a++) if (b == this._frames[a]) return a + 1;
		return -1
	};
	c.prototype.getFrame = function(a) {
		if (typeof a == "number") return this._frames[a - 1];
		return this._frameLables[a]
	};
	c.prototype.removeFrame = function(a) {
		var b = this.getFrame(a);
		a = a;
		if (b.label) {
			a = this.getFrameNumber(b);
			delete this._frameLables[b.label]
		}
		this._frames.splice(a - 1, 1)
	};
	c.prototype.getTotalFrames = function() {
		return this._frames.length
	};
	c.prototype.nextFrame = function() {
		var a = this.getFrame(this.currentFrame);
		if (a.pauseFrames) if (a.pauseFrames > this._pauseFrames) this._pauseFrames++;
		else this._pauseFrames = 0;
		if (a.gotoFrame) if (this._pauseFrames == 0 || !a.pauseFrames) return this.currentFrame = this.getFrameNumber(a.gotoFrame);
		return a.pauseFrames && this._pauseFrames > 0 ? this.currentFrame : this.currentFrame >= this._frames.length ? this.currentFrame = 1 : ++this.currentFrame
	};
	c.prototype.play = function() {
		this._paused = false
	};
	c.prototype.stop = function() {
		this._paused = true
	};
	c.prototype.gotoAndStop = function(a) {
		this.currentFrame = this.getFrameNumber(a);
		this._paused = true
	};
	c.prototype.gotoAndPlay = function(a) {
		this.currentFrame = this.getFrameNumber(a);
		this._paused = false
	};
	c.prototype.render = function(a) {
		var b = this.getFrame(this.currentFrame);
		this._frameDisObj && this._frameDisObj != b.disObj && this.removeChild(this._frameDisObj);
		this.addChildAt(b.disObj, 0);
		this._frameDisObj = b.disObj;
		this.width = Math.max(this.width, this._frameDisObj.width);
		this.height = Math.max(this.height, this._frameDisObj.height);
		b.stop && this.stop();
		c.superClass.render.call(this, a);
		!this._paused && a == this.getStage().context && this.nextFrame()
	}
})();
(function() {
	var c = function() {
			this.name = NameUtil.createUniqueName("Graphics");
			var a = document.createElement("canvas");
			a.width = 1E3;
			a.height = 1E3;
			this._context = a.getContext("2d");
			c._init(this, this._context)
		};
	casual.Graphics = c;
	c.prototype._proxy = function(a, b, d) {
		this[b] = function() {
			return a[b].apply(a, arguments) || this
		};
		if (d) this[d] = this[b]
	};
	c._init = function(a, b) {
		a._proxy(b, "beginPath");
		a._proxy(b, "closePath");
		a._proxy(b, "stroke");
		a._proxy(b, "fill");
		a._proxy(b, "moveTo");
		a._proxy(b, "lineTo");
		a._proxy(b, "arcTo");
		a._proxy(b, "arc");
		a._proxy(b, "quadraticCurveTo", "curveTo");
		a._proxy(b, "bezierCurveTo");
		a._proxy(b, "rect");
		a._proxy(b, "createLinearGradient");
		a._proxy(b, "createRadialGradient");
		a._proxy(b, "createPattern");
		a.fillStyle = null;
		a.strokeStyle = null;
		a.fillAlpha = 1;
		a.lineAlpha = 1;
		a.lineWidth = 1
	};
	c.prototype.lineStyle = function(a, b, d, e, f, g) {
		this.lineWidth = this._context.lineWidth = a || 1;
		this.strokeStyle = this._context.strokeStyle = b || "0";
		this.lineAlpha = d || 1;
		if (e != undefined) this._context.lineCap = e;
		if (f != undefined) this._context.lineJoin = f;
		if (g != undefined) this._context.miterLimit = g;
		return this
	};
	c.prototype.beginLinearGradientFill = function(a, b, d, e, f, g) {
		a = this.createLinearGradient(a, b, d, e);
		b = 0;
		for (d = f.length; b < d; b++) a.addColorStop(g[b], f[b]);
		this.fillStyle = a;
		return this
	};
	c.prototype.beginRadialGradientFill = function(a, b, d, e, f, g, h, i) {
		a = this.createRadialGradient(a, b, d, e, f, g);
		b = 0;
		for (d = h.length; b < d; b++) a.addColorStop(i[b], h[b]);
		this.fillStyle = a;
		return this
	};
	c.prototype.beginBitmapFill = function(a, b) {
		b = b || "";
		this.fillStyle = this.createPattern(a, b);
		return this
	};
	c.prototype.beginFill = function(a, b) {
		if (a) this.fillStyle = this._context.fillStyle = a;
		this.fillAlpha = b || 1;
		return this
	};
	c.prototype.endFill = function() {
		if (this.strokeStyle) {
			this._context.strokeStyle = this.strokeStyle;
			this._context.globalAlpha = this.lineAlpha;
			this._context.stroke()
		}
		if (this.fillStyle) {
			this._context.fillStyle = this.fillStyle;
			this._context.globalAlpha = this.fillAlpha;
			this._context.fill()
		}
		return this
	};
	c.prototype.drawRect = function(a, b, d, e) {
		this.beginPath();
		this.rect(a, b, d, e);
		this.closePath();
		this.endFill();
		return this
	};
	c.prototype.drawRoundRect = function(a, b, d, e, f) {
		return this.drawRoundRectComplex(a, b, d, e, f, f, f, f)
	};
	c.prototype.drawRoundRectComplex = function(a, b, d, e, f, g, h, i) {
		this.beginPath();
		this.moveTo(a + f, b);
		this.lineTo(a + d - g, b);
		this.arc(a + d - g, b + g, g, -Math.PI / 2, 0, false);
		this.lineTo(a + d, b + e - h);
		this.arc(a + d - h, b + e - h, h, 0, Math.PI / 2, false);
		this.lineTo(a + i, b + e);
		this.arc(a + i, b + e - i, i, Math.PI / 2, Math.PI, false);
		this.lineTo(a, b + f);
		this.arc(a + f, b + f, f, Math.PI, Math.PI * 3 / 2, false);
		this.closePath();
		this.endFill();
		return this
	};
	c.prototype.drawCircle = function(a, b, d) {
		this.beginPath();
		this.arc(a + d, b + d, d, 0, Math.PI * 2, 0);
		this.closePath();
		this.endFill();
		return this
	};
	c.prototype.drawEllipse = function(a, b, d, e) {
		if (d == e) return this.drawCircle(a, b, d);
		d = d / 2;
		e = e / 2;
		var f = 0.5522847498307933 * d,
			g = 0.5522847498307933 * e;
		a += d;
		b += e;
		this.beginPath();
		this.moveTo(a + d, b);
		this.bezierCurveTo(a + d, b - g, a + f, b - e, a, b - e);
		this.bezierCurveTo(a - f, b - e, a - d, b - g, a - d, b);
		this.bezierCurveTo(a - d, b + g, a - f, b + e, a, b + e);
		this.bezierCurveTo(a + f, b + e, a + d, b + g, a + d, b);
		this.closePath();
		this.endFill();
		return this
	};
	c.prototype.get = function() {
		return this._context.canvas
	};
	c.prototype.setSize = function(a, b) {
		this._context.save();
		if (a != undefined) this._context.canvas.width = a;
		if (b != undefined) this._context.canvas.height = b;
		this._context.restore();
		return this
	};
	c.prototype.clear = function() {
		this._context.clearRect(0, 0, this._context.canvas.width, this._context.canvas.height);
		this._context.restore();
		return this
	}
})();
(function() {
	var c = function(a) {
			casual.DisplayObject.call(this);
			this.name = NameUtil.createUniqueName("Shape");
			this.mouseEnabled = false;
			this.graphics = a || new casual.Graphics
		};
	casual.inherit(c, casual.DisplayObject);
	casual.Shape = c;
	c.prototype.render = function(a) {
		a.drawImage(this.graphics.get(), 0, 0)
	}
})();
(function() {
	var c = function(a, b, d) {
			casual.DisplayObject.call(this);
			this.name = NameUtil.createUniqueName("Text");
			this.text = a;
			this.color = b || "#000";
			this.font = d || "12px Arial";
			this.align = "start";
			this.baseline = "alphabetic";
			this.maxWidth = null;
			this.outline = false
		};
	casual.inherit(c, casual.DisplayObject);
	casual.Text = c;
	c.prototype.render = function(a) {
		if (!(!this.text || this.text.length == 0)) {
			if (this.outline) a.strokeStyle = this.color;
			else a.fillStyle = this.color;
			a.font = this.font;
			a.textAlign = this.align;
			a.textBaseline = this.baseline;
			this.outline ? a.strokeText(this.text, 0, 0, this.maxWidth) : a.fillText(this.text, 0, 0, this.maxWidth)
		}
	};
	c.prototype.getWidth = function(a) {
		if (!this.text || this.text.length == 0) return 0;
		return a.measureText(this.text).width
	}
})();
(function() {
	var c = function(a, b, d, e) {
			casual.MovieClip.call(this);
			this.name = NameUtil.createUniqueName("Button");
			a && this.setUpState(a);
			b && this.setOverState(b);
			d && this.setDownState(d);
			e && this.setDisabledState(e);
			this.state = c.state.UP;
			this.enabled = true;
			this.mouseChildren = false;
			this.useHandCursor = true;
			this.stop()
		};
	casual.inherit(c, casual.MovieClip);
	casual.Button = c;
	c.state = {
		UP: "up",
		OVER: "over",
		DOWN: "down",
		DISABLED: "disabled"
	};
	c.prototype.setUpState = function(a) {
		this.addFrameAt(new casual.Frame(a, c.state.UP), 0);
		this.upState = a;
		return this
	};
	c.prototype.setOverState = function(a) {
		this.addFrameAt(new casual.Frame(a, c.state.OVER), 1);
		this.overState = a;
		return this
	};
	c.prototype.setDownState = function(a) {
		this.addFrameAt(new casual.Frame(a, c.state.DOWN), 2);
		this.downState = a;
		return this
	};
	c.prototype.setDisabledState = function(a) {
		this.addFrameAt(new casual.Frame(a, c.state.DISABLED), 3);
		this.disabledState = a;
		return this
	};
	c.prototype.setEnabled = function(a) {
		if (this.enabled == a) return this;
		if (this.mouseEnabled = this.enabled = a) this.currentFrame == 4 && this.gotoAndStop(c.state.UP);
		else this.disabledState ? this.gotoAndStop(c.state.DISABLED) : this.gotoAndStop(c.state.UP);
		return this
	};
	c.prototype.setState = function(a) {
		if (this.state != a) {
			this.state = a;
			switch (a) {
			case c.state.OVER:
			case c.state.DOWN:
			case c.state.UP:
				if (!this.enabled) this.mouseEnabled = this.enabled = true;
				this.gotoAndStop(a);
				break;
			case c.state.DISABLED:
				this.setEnabled(false)
			}
		}
	};
	c.prototype.onMouseEvent = function(a) {
		if (this.enabled) switch (a.type) {
		case "mousemove":
			if (this.onMouseOver && this.state != c.state.OVER) {
				a.type = "mouseover";
				this.onMouseOver(a)
			} else this.onMouseMove && this.state == c.state.OVER && this.onMouseMove(a);
			this.overState && this.state == c.state.UP && this.setState(c.state.OVER);
			break;
		case "mouseout":
			this.upState && this.setState(c.state.UP);
			if (this.onMouseOut) {
				a.type = "mouseout";
				this.onMouseOut(a)
			}
			break;
		case "mousedown":
			this.downState && this.setState(c.state.DOWN);
			this.onMouseDown && this.onMouseDown(a);
			break;
		case "mouseup":
			this.overState ? this.setState(c.state.OVER) : this.setState(c.state.UP);
			this.onMouseUp && this.onMouseUp(a)
		}
	};
	c.prototype.onMouseMove = null;
	c.prototype.onMouseOver = null;
	c.prototype.onMouseOut = null;
	c.prototype.onMouseDown = null;
	c.prototype.onMouseUp = null
})();
(function() {
	var c = function(a, b, d) {
			this._playing = this._loaded = false;
			this._autoPlay = b;
			this._loop = d || false;
			try {
				this._element = document.createElement("audio");
				this._element.preload = true;
				this._element.src = a;
				this._element.load();
				this._element.addEventListener("ended", casual.delegate(this._endHandler, this), false);
				this._loadInterval = setInterval(casual.delegate(this._loadHandler, this), 10)
			} catch (e) {}
		};
	casual.Audio = c;
	c.prototype._loadHandler = function() {
		if (this._element.readyState > 2) {
			this._loaded = true;
			clearTimeout(this._loadInterval);
			this._loadInterval = null;
			this._autoPlay && this.play()
		}
		if (this._element.error) {
			clearTimeout(this._loadInterval);
			this._loadInterval = null
		}
	};
	c.prototype._endHandler = function() {
		if (this._loop) this.play();
		else this._playing = false
	};
	c.prototype.play = function() {
		if (this.isLoaded()) {
			this._element.play();
			this._playing = true
		} else this._autoPlay = true
	};
	c.prototype.stop = function() {
		if (this.isPlaying()) {
			this._element.pause();
			this._playing = false
		}
	};
	c.prototype.isLoaded = function() {
		return this._loaded
	};
	c.prototype.isPlaying = function() {
		return this._playing
	}
})();
window.trace = casual.trace;
window.EventBase = casual.EventBase;
window.StageEvent = casual.StageEvent;
window.EventDispatcher = casual.EventDispatcher;
window.Matrix = casual.Matrix;
window.Point = casual.Point;
window.Rectangle = casual.Rectangle;
window.Frame = casual.Frame;
window.Astar = casual.Astar;
window.NameUtil = casual.NameUtil;
window.DisplayObject = casual.DisplayObject;
window.Graphics = casual.Graphics;
window.Shape = casual.Shape;
window.Bitmap = casual.Bitmap;
window.DisplayObjectContainer = casual.DisplayObjectContainer;
window.Sprite = casual.Sprite;
window.MovieClip = casual.MovieClip;
window.Stage = casual.Stage;
window.Text = casual.Text;
window.Button = casual.Button;