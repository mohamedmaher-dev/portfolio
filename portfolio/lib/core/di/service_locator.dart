import 'package:get_it/get_it.dart';
import 'package:flutter/foundation.dart';
import '../../features/home/view_models/home_cubit.dart';
import '../../features/about/view_models/about_cubit.dart';
import '../../features/projects/view_models/projects_cubit.dart';
import '../../features/contact/view_models/contact_cubit.dart';
import '../services/navigation_service.dart';
import '../services/portfolio_service.dart';

final GetIt sl = GetIt.instance;

Future<void> setupServiceLocator() async {
  try {
    // Simple registration without complex error handling
    sl.registerLazySingleton<NavigationService>(() => NavigationService());
    sl.registerLazySingleton<PortfolioService>(() => PortfolioService());

    // Cubits - using factory registration for stateful widgets
    sl.registerFactory<HomeCubit>(() => HomeCubit());
    sl.registerFactory<AboutCubit>(() => AboutCubit(sl<PortfolioService>()));
    sl.registerFactory<ProjectsCubit>(
      () => ProjectsCubit(sl<PortfolioService>()),
    );
    sl.registerFactory<ContactCubit>(() => ContactCubit());

    debugPrint('✅ Service locator setup completed successfully');
  } catch (e) {
    debugPrint('❌ Error in service locator setup: $e');
    rethrow;
  }
}
