import 'package:flutter/material.dart';
import 'package:flutter_tmdb/api_service.dart';
import 'package:flutter_tmdb/popular_movies_response/popular_movies_response.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  late Future<PopularMoviesResponse> popularMoviesResp;

  @override
  void initState() {
    super.initState();
    popularMoviesResp = ApiService().fetchPopularMovies();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Home'),
      ),
      body: FutureBuilder<PopularMoviesResponse>(
        future: popularMoviesResp,
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return ListView.builder(
              itemCount: snapshot.data!.results!.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title:
                      Text(snapshot.data!.results![index].title ?? 'No Title'),
                  subtitle: Text(
                      snapshot.data!.results![index].overview ?? 'No Overview'),
                );
              },
            );
          } else if (snapshot.hasError) {
            return Text('${snapshot.error}');
          }

          return const Center(
            child: CircularProgressIndicator(),
          );
        },
      ),
    );
  }
}
