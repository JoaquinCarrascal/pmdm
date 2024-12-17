import 'package:flutter/material.dart';
import 'package:star_wars_flutter/people_response/people.dart';

class PeopleDetailScreen extends StatefulWidget {
  final People peopleItem;
  const PeopleDetailScreen({super.key, required this.peopleItem});

  @override
  State<PeopleDetailScreen> createState() => _PeopleDetailScreenState();
}

class _PeopleDetailScreenState extends State<PeopleDetailScreen> {
  @override
  Widget build(BuildContext context) {
    final peopleId = widget.peopleItem.url!.split('/')[5];

    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 0, 0, 0),
        centerTitle: true,
        title: Text(
          widget.peopleItem.name!,
          style: const TextStyle(fontSize: 20, color: Colors.white),
        ),
        iconTheme: const IconThemeData(
          color: Colors.white, // Cambia el color de la flecha de volver atrás
        ),
      ),
      body: Container(
        color: const Color.fromARGB(255, 0, 0, 0), // Fondo negro
        child: Column(
          children: [
            Expanded(
              child: ListView(
                children: [
                  Padding(
                    padding: const EdgeInsets.all(18.0),
                    child: ClipRRect(
                      borderRadius:
                          const BorderRadius.all(Radius.circular(20.0)),
                      child: Image.network(
                        'https://starwars-visualguide.com/assets/img/characters/$peopleId.jpg',
                        width: double.infinity,
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: GridView.count(
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      crossAxisCount: 3,
                      childAspectRatio: 1.2,
                      children: [
                        _buildGridTile('Altura', widget.peopleItem.height!),
                        _buildGridTile('Peso', widget.peopleItem.mass!),
                        _buildGridTile(
                            'Color de pelo', widget.peopleItem.hairColor!),
                        _buildGridTile(
                            'Color de piel', widget.peopleItem.skinColor!),
                        _buildGridTile(
                            'Color de ojos', widget.peopleItem.eyeColor!),
                        _buildGridTile(
                            'Año de nacimiento', widget.peopleItem.birthYear!),
                        _buildGridTile('Género', widget.peopleItem.gender!),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildGridTile(String title, String value) {
    return Card(
      color: const Color.fromARGB(255, 30, 30, 30),
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Center(
              child: Text(
                title,
                style: const TextStyle(fontSize: 16, color: Colors.white),
              ),
            ),
            const SizedBox(height: 4),
            Expanded(
              child: Center(
                child: Text(
                  value,
                  style: const TextStyle(fontSize: 14, color: Colors.white70),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
