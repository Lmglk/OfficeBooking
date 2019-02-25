package com.vvt.officebooking.repository.user;


import com.vvt.officebooking.model.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);

    Long countByEmail(String email);

    @Query("SELECT u FROM User u WHERE u.id = :id")
    User findByIdExact(@Param("id") Long id);
}
