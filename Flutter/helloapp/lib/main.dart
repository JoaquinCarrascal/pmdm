import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Mi contador'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  var rating = 0.0;
  Color _selectedColor = Colors.white;
  var textoBoton = 'Botón pulsado';
  int counterBtn = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Container(
        color: _selectedColor,
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              const Text(
                'You have pushed the button this many times:',
              ),
              Text(
                '$_counter',
                style: Theme.of(context).textTheme.headlineMedium,
              ),
              Text(
                '$textoBoton $counterBtn veces',
                style: Theme.of(context).textTheme.headlineMedium,
              ),
              DropdownMenu<Color>(
                menuStyle: const MenuStyle(
                  backgroundColor: WidgetStatePropertyAll<Color>(Colors.white),
                ),
                dropdownMenuEntries: const [
                  DropdownMenuEntry(
                    value: Colors.red,
                    label: 'Red',
                  ),
                  DropdownMenuEntry(
                    value: Colors.green,
                    label: 'Green',
                  ),
                  DropdownMenuEntry(
                    value: Colors.blue,
                    label: 'Blue',
                  ),
                  DropdownMenuEntry(
                    value: Colors.white,
                    label: 'White',
                  ),
                ],
                onSelected: (Color? newColor) {
                  if (newColor != null) {
                    setState(() {
                      _selectedColor = newColor;
                    });
                  }
                },
              ),
              Slider(
                value: rating,
                min: 0,
                max: 100.0,
                onChanged: (double newRating) {
                  setState(() {
                    rating = newRating;
                  });
                },
                divisions: 5,
                label: rating.toString(),
              ),
              IconButton(
                icon: const Icon(Icons.info),
                iconSize: 40,
                tooltip: 'Soy un tooltip',
                onPressed: () {
                  setState(() {
                    textoBoton = 'Botón pulsado';
                    counterBtn++;
                  });
                },
              )
            ],
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}
