import 'package:flutter/material.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SizedBox(
        width: double.infinity,
        height: double.infinity,
        child: Container(
          color: const Color(0xFFE62F16),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Image.asset('images/path_logo.png', width: 200, height: 100),
              const Text('Beautiful, Private Sharing',
                  style: TextStyle(
                      fontSize: 20, color: Color.fromARGB(129, 197, 197, 197))),
              Container(
                margin: const EdgeInsets.only(top: 200),
                child: SizedBox(
                  width: 300,
                  child: FloatingActionButton(
                      onPressed: () {},
                      elevation: 0,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(7),
                      ),
                      child: const Text('Sign up',
                          style: TextStyle(
                              fontSize: 25,
                              fontWeight: FontWeight.bold,
                              color: Color(0xFFE62F16)))),
                ),
              ),
              Container(
                margin: const EdgeInsets.only(top: 20),
                child: const Text('Already have a Path account?',
                    style: TextStyle(
                        fontSize: 17,
                        color: Color.fromARGB(129, 197, 197, 197))),
              ),
              SizedBox(
                width: 300,
                child: FloatingActionButton(
                    onPressed: () {},
                    backgroundColor: const Color(0xFFE62F16),
                    elevation: 0,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(7),
                      side: const BorderSide(
                          color: Color.fromARGB(186, 221, 221, 221), width: 1),
                    ),
                    child: const Text('Log in',
                        style: TextStyle(
                            fontSize: 25,
                            fontWeight: FontWeight.normal,
                            color: Color.fromARGB(186, 221, 221, 221)))),
              ),
              SizedBox(
                width: 300,
                child: RichText(
                  textAlign: TextAlign.center,
                  text: const TextSpan(
                    text: 'By using Path, you agree to our ',
                    style: TextStyle(
                        fontSize: 17,
                        color: Color.fromARGB(129, 197, 197, 197)),
                    children: <TextSpan>[
                      TextSpan(
                          text: 'Terms of Service',
                          style: TextStyle(
                              color: Color(0xFFFFFFFF),
                              decoration: TextDecoration.underline)),
                      TextSpan(text: ' and '),
                      TextSpan(
                          text: 'Privace Policy',
                          style: TextStyle(
                              color: Color(0xFFFFFFFF),
                              decoration: TextDecoration.underline)),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
