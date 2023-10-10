



	function readMore(btn) {
		let post = btn.parentElement;
		let dots = post.querySelector(".dots");
		let moreText = post.querySelector(".more");
		
		dots.classList.toggle("hide");
		moreText.classList.toggle("hide");
	  
		btn.textContent = moreText.classList.contains("hide") ? "Read More" : "Read Less";
	  }
	  