const validateEmail = (email) => {
	const re = /\S+@\S+\.\S+/;

	if (!email) {
		return "Email cannot be empty";
	}

	if (!re.test(email)) {
		return "Ooops! We need a valid email address";
	}

	return null;
};

const validatePassword = (password) => {
	if (password.length < 6) {
		return "Password must be at least 6 characters";
	}

	return null;
};

const validateRegisterInput = (
	firstName,
	lastName,
	email,
	role,
	phone,
	password
) => {
	if (!firstName || !lastName || !email || !role || !phone || !password) {
		return "All fields are required";
	}

	if (firstName.length < 3) {
		return "First name must be at least 3 characters";
	}

	if (lastName.length < 3) {
		return "Last name must be at least 3 characters";
	}

	if (phone.length < 10) {
		return "Phone number must be at least 10 characters";
	}

	if (role.length < 3) {
		return "Role must be at least 3 characters";
	}

	if (validateEmail(email)) {
		return validateEmail(email);
	}

	if (validatePassword(password)) {
		return validatePassword(password);
	}

	return null;
};

const validateLoginInput = (email, password) => {
	if (!email || !password) {
		return "All fields are required";
	}

	if (validateEmail(email)) {
		return validateEmail(email);
	}

	if (validatePassword(password)) {
		return validatePassword(password);
	}

	return null;
};

export { validateRegisterInput, validateLoginInput };
