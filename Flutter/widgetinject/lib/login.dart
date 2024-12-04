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
      appBar: AppBar(
        title: const Center(child: Text('Login page')),
        backgroundColor: const Color.fromARGB(255, 152, 78, 255),
      ),
      body: Center(
        child: Container(
          padding: const EdgeInsets.all(16),
          child: Center(
            child: Container(
              margin: const EdgeInsets.only(bottom: 65),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  const TextField(
                    decoration: InputDecoration(
                      labelText: 'Username',
                    ),
                  ),
                  const TextField(
                    decoration: InputDecoration(
                      labelText: 'Password',
                    ),
                  ),
                  Container(
                    margin: const EdgeInsets.only(top: 16),
                    child: SizedBox(
                      width: double.infinity,
                      child: ElevatedButton(
                        onPressed: () {},
                        style: ElevatedButton.styleFrom(
                          backgroundColor:
                              const Color.fromARGB(255, 212, 182, 255),
                        ),
                        child: const Text('Login'),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.arrow_back),
      ),
    );
  }
}
