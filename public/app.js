

	function something() {

		var x = window.localStorage.getItem('bbb'); // x = hh['bbb']

		x = x * 1 + 1; //string to integer x = x + 1

		window.localStorage.setItem('bbb', x); // hh['bbb'] = x

		alert(x);

	}

	function add_to_cart() {
		alert('Added to cart!')
	}

	