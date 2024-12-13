import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:star_wars_flutter/people_response/people_response.dart';
import 'package:star_wars_flutter/people_response/people.dart';
import 'package:star_wars_flutter/ui/people_detail_screen.dart';

class PeopleUIWidget extends StatefulWidget {
  const PeopleUIWidget({super.key});

  @override
  State<PeopleUIWidget> createState() => _PeopleUIWidgetState();
}

class _PeopleUIWidgetState extends State<PeopleUIWidget> {
  late Future<PeopleResponse> peopleResponse;

  @override
  void initState() {
    super.initState();
    peopleResponse = getPeople();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 0, 0, 0),
        title: Center(
            child: Image.asset('images/sw_logo.png', width: 100, height: 100)),
      ),
      body: Container(
        color: const Color.fromARGB(255, 0, 0, 0),
        child: FutureBuilder<PeopleResponse>(
          future: peopleResponse,
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              return _buildPeopleList(context, snapshot.data!);
            } else if (snapshot.hasError) {
              return Text('${snapshot.error}');
            }

            // By default, show a loading spinner.
            return const Center(child: CircularProgressIndicator());
          },
        ),
      ),
    );
  }

  Future<PeopleResponse> getPeople() async {
    final response =
        await http.get(Uri.parse('https://swapi.dev/api/people/?page=1'));

    if (response.statusCode == 200) {
      return PeopleResponse.fromJson(response.body);
    } else {
      throw Exception('Failed to load PeopleResponse');
    }
  }

  Widget _buildPeopleList(BuildContext context, PeopleResponse peopleResponse) {
    return GridView.builder(
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2, childAspectRatio: (200 / 300)),
      itemCount: peopleResponse.results!.length,
      itemBuilder: (context, index) {
        return _buildPeopleCard(peopleResponse.results![index], context);
      },
    );
  }

  Widget _buildPeopleCard(People people, BuildContext context) {
    final peopleId = people.url!.split('/')[5];
    return Padding(
      padding: const EdgeInsets.all(5.0),
      child: Card(
        color: const Color.fromARGB(255, 0, 0, 0),
        child: Container(
          decoration: BoxDecoration(
            border: Border.all(
              color: const Color.fromARGB(255, 0, 0, 0),
              width: 2.0,
            ),
            borderRadius: BorderRadius.circular(15.0),
            boxShadow: const [
              BoxShadow(
                color: Color.fromARGB(255, 255, 212, 69),
                spreadRadius: 3.0,
                blurRadius: 3.0,
              ),
            ],
          ),
          child: Column(
            children: [
              ClipRRect(
                borderRadius:
                    const BorderRadius.vertical(top: Radius.circular(13.0)),
                child: GestureDetector(
                  onTap: () {
                    Navigator.of(context).push(
                      MaterialPageRoute(
                        builder: (context) =>
                            PeopleDetailScreen(peopleItem: people),
                      ),
                    );
                  },
                  child: Image.network(
                    'https://starwars-visualguide.com/assets/img/characters/$peopleId.jpg',
                    width: double.infinity,
                    height: 230,
                    fit: BoxFit.cover,
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(2.0),
                child: Container(
                  height: 38,
                  decoration: const BoxDecoration(
                    color: Color.fromARGB(255, 0, 0, 0),
                    borderRadius: BorderRadius.only(
                      bottomLeft: Radius.circular(13.0),
                      bottomRight: Radius.circular(13.0),
                    ),
                  ),
                  child: Center(
                    child: Text(
                      people.name!,
                      style: const TextStyle(
                          color: Color.fromARGB(255, 255, 255, 255),
                          fontSize: 17,
                          fontWeight: FontWeight.bold),
                      overflow: TextOverflow.ellipsis,
                    ),
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
// 'https://starwars-visualguide.com/assets/img/characters/${peopleResponse.results![index].url!.split('/')[5]}.jpg'
// peopleResponse.results![index].name!