import 'dart:convert';

import 'package:flutter_tmdb/popular_movies_response/popular_movies_response.dart';
import 'package:http/http.dart' as http;

class ApiService {
  Future<PopularMoviesResponse> fetchPopularMovies() async {
    final response = await http.get(Uri.parse(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=de28babb0baeed53e1255cd2b2bd2e15'));

    if (response.statusCode == 200) {
      return PopularMoviesResponse.fromJson(
          json.decode(response.body) as Map<String, dynamic>);
    } else {
      throw Exception('Failed to load album');
    }
  }
}
