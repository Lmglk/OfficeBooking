package com.vvt.officebooking.config;

import com.vvt.officebooking.model.entity.user.User;
import com.vvt.officebooking.model.entity.user.UserRole;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.util.StringUtils;

import java.util.Collection;
import java.util.Set;

@NoArgsConstructor
public class CustomUserDetails extends User implements UserDetails {
    private static final long serialVersionUID = 1L;

    public CustomUserDetails(User user) {
        super(user.getId(), user.getName(), user.getPassword(),
                user.getEmail(), user.getRoles(), user.getBooking());
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        String roles = StringUtils.collectionToCommaDelimitedString(getRoles());
        return AuthorityUtils.commaSeparatedStringToAuthorityList(roles);
    }

    public Set<UserRole> getUserRoles() {
        return getRoles();
    }

    @Override
    public String getUsername() {
        return super.getEmail();
    }
}
